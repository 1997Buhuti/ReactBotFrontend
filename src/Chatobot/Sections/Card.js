import React from "react";
import { Card } from "antd";
import Icon, { LinkOutlined } from "@ant-design/icons";
import "./sections.css";
const { Meta } = Card;

function CardComponent(props) {
  console.log("Here are  the props");
  let data = props;
  console.log(props.cardInfo.fields.image.stringValue);
  return (
    <Card
      className="card-img"
      style={{ width: 240 }}
      cover={
        <img
          alt={data.cardInfo.fields.description.stringValue}
          src={data.cardInfo.fields.image.stringValue}
        />
      }
      actions={[
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={data.cardInfo.fields.link.stringValue}
        >
          <LinkOutlined />
        </a>,
      ]}
    >
      <Meta
        title={data.cardInfo.fields.lesson.stringValue}
        description={data.cardInfo.fields.link.stringValue}
      />
    </Card>
  );
}
//props.cardInfo.fields.description.stringValue sdsd
export default CardComponent;
