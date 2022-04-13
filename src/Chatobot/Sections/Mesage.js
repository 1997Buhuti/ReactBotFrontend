import { Avatar, List } from "antd";
import React from "react";
import Icon, { UserOutlined } from "@ant-design/icons";

const Message = (props) => {
  const AvatarSrc =
    props.speaks === "bot" ? <Icon type="robot" /> : <Icon type="smile" />;
  return (
    <List.Item.Meta
      avatar={
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
      }
      title={props.speaks}
      description={props.body}
    />
  );
};
export default Message;
