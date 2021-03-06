import React, { useEffect, useRef, useState } from "react";
import "./Chatbot2.css";
import Message from "./Sections/Mesage";
import Card from "./Sections/Card";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { saveMessage } from "../redux/actions/message_actions";
import {
  RobotFilled,
  RobotOutlined,
  SendOutlined,
  SmileOutlined,
  StepBackwardFilled,
} from "@ant-design/icons";
import { List, Avatar, Typography, Button } from "antd";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { config } from "../constance";
const { Title } = Typography;
const BASEURL = config.url.API_URL;

const cookies = new Cookies();
const Chatbot2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [TextMessage, setTextMessage] = useState("");
  const [invalidMessage, setInvalidMessage] = useState("");
  let messagesFromRedux = useSelector((state) => state.message.messages);
  const messagesEndRef = useRef(null);

  if (cookies.get("userId") === undefined) {
    cookies.set("userId", uuid(), { path: "/" });
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  //Use effect hook used for welcome messages
  useEffect(() => {
    renderMessages([]);
    df_event_query("Introduction").then(() => {
      renderOneMessage(messagesFromRedux);
    });
    df_event_query("MyFunctionality").then(() =>
      renderOneMessage(messagesFromRedux)
    );
  }, []);

  //Use effect hook used to scroll down message box
  useEffect(() => {
    scrollToBottom();
  }, [messagesFromRedux]);

  //function to invoke text_query functionality in dialogflow
  const df_text_query = async (queryText) => {
    // Message user sent
    let says = {
      speaks: "user",
      msg: {
        text: {
          text: queryText,
        },
      },
    };
    dispatch(saveMessage(says));
    //this method is used to set the state  of the message
    try {
      const res = await axios.post(`${BASEURL}/api/df_text_query`, {
        text: queryText,
        userId: cookies.get("userId"),
      });

      if (
        res.data.allRequiredParamsPresent &&
        res.data.parameters &&
        res.data.action === "sendMessageToTeacher"
      ) {
        console.log(res.data.parameters.name);
        const response = await axios.post(`${BASEURL}/api/insertDetails`, {
          question: invalidMessage.msg.text.text,
          name: res.data.parameters.fields.name.stringValue,
          email: res.data.parameters.fields.email.stringValue,
        });
        console.log("OG Boss");
        console.log(response);
      }
      for (let msg of res.data.fulfillmentMessages) {
        says = {
          speaks: "bot",
          msg: msg,
        };
      }
      dispatch(saveMessage(says));
      console.log(says);
    } catch (error) {
      says = {
        speaks: "bot",
        msg: {
          text: {
            text: "Error occurred please contact the developers",
          },
        },
      };
      dispatch(saveMessage(says));
      console.log(error);
    }
  };
  //function to invoke event_query functionality in dialogflow
  const df_event_query = async (eventName) => {
    try {
      const res = await axios.post(`${BASEURL}/api/df_event_query`, {
        event: eventName,
        userId: cookies.get("userId"),
      });
      const content = res.data.fulfillmentMessages[0];
      let says = {
        speaks: "bot",
        msg: content,
      };
      console.log("says");
      dispatch(saveMessage(says));
    } catch (error) {
      let conversation = {
        who: "bot",
        content: {
          text: {
            text: " Error just occurred, please check the problem",
          },
        },
      };
      console.log(error);
    }
  };

  const insertUserDetails = async (details) => {
    try {
      const res = await axios.post(`${BASEURL}/api/insertDetail`, {
        name: details.name,
        email: details.email,
        date: details.date,
        question: details.question,
      });
    } catch (error) {}
  };
  const keyPressHanlder = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value) {
        return alert("you need to type something first");
      }
      setTextMessage("");
      //we will send request to text query route
      df_text_query(e.target.value);

      e.target.value = "";
    }
  };

  const sendButtonHandler = () => {
    df_text_query(TextMessage);
    setTextMessage("");
  };

  //function to Card
  const renderCards = (cards) => {
    return cards.map((card, i) => <Card key={i} cardInfo={card.structValue} />);
  };

  //function to trigger ok and no
  const triggerRespons = (val) => {
    console.log("triggerResponse");
    console.log(messagesFromRedux[messagesFromRedux.length - 2]);
    setInvalidMessage(messagesFromRedux[messagesFromRedux.length - 2]);
    console.log(invalidMessage);
    if (val === true) {
      // df_text_query("I have to ask the teacher");
      console.log("inside false");
      df_text_query("I need to leave a message to a teacher").then(() => {
        renderOneMessage(messagesFromRedux);
      });
    } else {
      console.log("inside false");
      df_text_query("I don't want to send this message to the teacher").then(
        () => {
          renderOneMessage(messagesFromRedux);
        }
      );
    }
  };

  const setFunction = (val) => {
    setInvalidMessage(val);
  };
  //function to render single message
  const renderOneMessage = (message, i) => {
    if (message.speaks && message.msg.text && message.msg.text.text) {
      // let val = message.msg.text.text.toString() === "Answer";
      // console.log(val);
      // if (val) {
      //   console.log("Tigga");
      // }
      if (message.msg.text.text.toString() === "Answer") {
        // console.log(messagesFromRedux[messagesFromRedux.length - 2]);
        // setFunction(
        //   messagesFromRedux[messagesFromRedux.length - 2].msg.text.text
        // );
        return (
          <div style={{ padding: "1rem", marginLeft: "2rem" }}>
            <h6>Sorry I cant understand what you've said?</h6>
            <h6>do you want to send this question to Teacher?</h6>
            <Button
              style={{ margin: "0.5rem" }}
              type="primary"
              onClick={() => triggerRespons(true)}
            >
              Ok
            </Button>
            <Button
              style={{ margin: "0.5rem" }}
              type="danger"
              onClick={() => triggerRespons(false)}
            >
              No
            </Button>
          </div>
        );
      }
      return (
        <Message
          key={i}
          speaks={message.speaks}
          body={message.msg.text.text}
          style={{ marginTop: "2px" }}
        />
      );
    } else if (message.speaks && message.msg.payload.fields.card) {
      console.log(message.msg.payload.fields.card.listValue.values);
      console.log(
        message.msg.payload.fields.card.listValue.values[0].structValue.fields
          .textResponse
      );
      const AvatarSrc =
        message.who === "bot" ? <RobotOutlined /> : <SmileOutlined />;
      const textResponse =
        message.msg.payload.fields.card.listValue.values[0].structValue.fields
          .response.stringValue;
      return (
        <div>
          <h6 style={{ marginLeft: "3em", color: "blue", marginTop: "1em" }}>
            {textResponse ? textResponse.toString() : ""}
          </h6>
          <List.Item style={{ padding: "1rem" }} className="CardsMessage">
            <List.Item.Meta
              avatar={
                <Avatar
                  style={{
                    backgroundColor: "#041454",
                  }}
                  icon={<RobotFilled />}
                />
              }
              title={message.who}
              description={renderCards(
                message.msg.payload.fields.card.listValue.values
              )}
            />
          </List.Item>
        </div>
      );
    }
  };

  //render all messages
  const renderMessages = (returnedMessages) => {
    if (returnedMessages) {
      return returnedMessages.map((message, i) => {
        return renderOneMessage(message, i);
      });
    } else if (returnedMessages.length > 0) {
      console.log("Hell returnedMessages are empty");
    } else {
      return null;
    }
  };

  const handleTextInputChange = (e) => {
    setTextMessage(e.target.value);
  };

  return (
    <div>
      <Button
        type="dashed"
        icon={<StepBackwardFilled />}
        shape="round"
        size="large"
        onClick={() => navigate("/")}
      >
        Home Page
      </Button>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <Title level={2}>
          CHAT BOT APP&nbsp;
          <RobotFilled />
        </Title>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            height: 700,
            width: 700,
            border: "3px solid black",
            borderRadius: "7px",
          }}
        >
          <div style={{ height: 644, width: "100%", overflow: "auto" }}>
            {renderMessages(messagesFromRedux)}
            <div ref={messagesEndRef} />
          </div>
          <Row>
            <Col
              span={22}
              Col
              xs={22}
              style={{
                backgroundColor: " #EEEEEE",
                margin: "0",
              }}
            >
              <input
                style={{
                  margin: 0,
                  width: "90%",
                  height: 40,
                  borderRadius: "4px",
                  padding: "5px",
                  fontSize: "1rem",
                }}
                placeholder="Send a message..."
                onKeyPress={keyPressHanlder}
                onChange={handleTextInputChange}
                value={TextMessage ? TextMessage : ""}
                type="text"
              />
            </Col>
            <Col
              style={{
                backgroundColor: " #EEEEEE",
                textAlign: "right",
                margin: "0",
              }}
              xs={2}
            >
              <SendOutlined
                style={{
                  fontSize: "24px",
                  cursor: "pointer",
                  margin: "10px",
                }}
                onClick={sendButtonHandler}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Chatbot2;
