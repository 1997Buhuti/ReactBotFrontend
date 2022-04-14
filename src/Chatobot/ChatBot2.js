import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { saveMessage } from "../redux/actions/message_actions";
import "./Chatbot2.css";
import Message from "./Sections/Mesage";
import Card from "./Sections/Card";
import {
  RobotFilled,
  RobotOutlined,
  SendOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { List, Avatar, Typography } from "antd";
import { Row, Col } from "antd";
const { Title } = Typography;

const Chatbot2 = () => {
  const dispatch = useDispatch();
  const messagesFromRedux = useSelector((state) => state.message.messages);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  //Use effect hook used for welcome messages
  useEffect(() => {
    df_event_query("Introduction").then(() =>
      renderOneMessage(messagesFromRedux)
    );
    df_event_query("MyFunctionality").then(() =>
      renderOneMessage(messagesFromRedux)
    );
    df_event_query("welcome").then(() => renderOneMessage(messagesFromRedux));
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
      const res = await axios.post(" http://localhost:5000/api/df_text_query", {
        text: queryText,
      });
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
      console.log(says);
    }
  };
  //function to invoke event_query functionality in dialogflow
  const df_event_query = async (eventName) => {
    try {
      const res = await axios.post("http://localhost:5000/api/df_event_query", {
        event: eventName,
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
            text: " Error just occured, please check the problem",
          },
        },
      };
      console.log("error");
    }
  };
  const keyPressHanlder = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value) {
        return alert("you need to type something first");
      }

      //we will send request to text query route
      df_text_query(e.target.value);

      e.target.value = "";
    }
  };

  const sendButtonHandler = (e) => {
    df_text_query(e.target.value);
    e.target.value = "";
  };

  //function to Card
  const renderCards = (cards) => {
    return cards.map((card, i) => <Card key={i} cardInfo={card.structValue} />);
  };

  //function to render single message
  const renderOneMessage = (message, i) => {
    if (message.speaks && message.msg.text && message.msg.text.text) {
      return (
        <Message
          key={i}
          speaks={message.speaks}
          body={message.msg.text.text}
          style={{ margin: "" }}
        />
      );
    } else if (message.speaks && message.msg.payload.fields.card) {
      console.log(message.msg.payload.fields.card.listValue.values);
      const AvatarSrc =
        message.who === "bot" ? <RobotOutlined /> : <SmileOutlined />;

      return (
        <div>
          <List.Item style={{ padding: "1rem" }} className="CardsMessage">
            <List.Item.Meta
              avatar={
                <Avatar
                  style={{
                    backgroundColor: "#87d068",
                  }}
                  icon={<UserOutlined />}
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
    } else {
      return null;
    }
  };
  return (
    <div>
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
                onClick={keyPressHanlder}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Chatbot2;
