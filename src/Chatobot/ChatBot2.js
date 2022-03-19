import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { saveMessage } from "../redux/actions/message_actions";
import "./Chatbot2.css";
import Message from "./Sections/Mesage";

const Chatbot2 = () => {
  const dispatch = useDispatch();
  const messagesFromRedux = useSelector((state) => state.message.messages);

  useEffect(() => {
    df_event_query("welcome");
  }, []);

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
      console.log(says);
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
  const renderOneMessage = (message, i) => {
    console.log("message", message);
    return (
      <Message key={i} speaks={message.speaks} body={message.msg.text.text} />
    );
  };
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
    <div id="chatbot" className="card-panel grey lighten-5">
      <h3 className="card-title">Chatbot</h3>
      <div className="card-body">
        <p className="scrollable">
          {renderMessages(messagesFromRedux)}
          <input type="text" onKeyPress={(e) => keyPressHanlder(e)} />
        </p>
      </div>
    </div>
  );
};

export default Chatbot2;
