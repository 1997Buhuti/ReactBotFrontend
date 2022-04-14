import { Avatar, List } from "antd";
import React from "react";
import { RobotFilled, SmileFilled } from "@ant-design/icons";

const Message = (props) => {
  return (
    <List.Item.Meta
      avatar={
        <Avatar
          style={{ backgroundColor: "#041454" }}
          icon={props.speaks === "bot" ? <RobotFilled /> : <SmileFilled />}
        />
      }
      title={props.speaks}
      description={props.body}
    />
  );
};
export default Message;
