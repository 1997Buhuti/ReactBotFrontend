import React from "react";
import { Row, Col, Table, Card } from "antd";
//import Row from "antd/es/descriptions/Row";
const dataSource = [
  {
    key: "1",
    name: "Awishka",
    email: "Random@gmail.com",
    question: "Why do we need sunlight?",
    date: "2022/04/11",
  },
  {
    key: "2",
    name: "Gimhanha",
    email: "Clover@gmail.com",
    question: "What are the sources of electricity?",
    date: "2022/04/13",
  },
  {
    key: "2",
    name: "Sudeepa",
    email: "Sudeepa@gmail.com",
    question: "What is photosynthesis",
    date: "2022/04/03",
  },
  {
    key: "2",
    name: "Charith",
    email: "Charith@gmail.com",
    question: "What are insulators",
    date: "2022/04/03",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Question",
    dataIndex: "question",
    key: "questions",
  },
  {
    title: "Date & Time",
    dataIndex: "date",
    key: "date",
  },
];
const KnowledgeBase = () => {
  return (
    <>
      <Row>
        <Col span={6}>
          <Card
            size="small"
            title="Total KnowledgeBases"
            extra={<a href="#">More</a>}
            style={{ width: 300, backgroundColor: "#a29bfe" }}
          >
            <h4>1345</h4>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            size="small"
            title="Total fallback intents"
            extra={<a href="#">More</a>}
            style={{ width: 300, backgroundColor: "#81ecec" }}
          >
            <h4>5</h4>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            size="small"
            title="Total intents"
            extra={<a href="#">More</a>}
            style={{ width: 300, backgroundColor: "#55efc4" }}
          >
            <h4>15</h4>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: "2rem" }} span={24}>
          <Table dataSource={dataSource} columns={columns} />
        </Col>
      </Row>
    </>
  );
};

export default KnowledgeBase;
