import React from "react";
import { Row, Col, Table, Card } from "antd";
//import Row from "antd/es/descriptions/Row";
const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
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
        <Col span={24}>
          <Table dataSource={dataSource} columns={columns} />
        </Col>
      </Row>
    </>
  );
};

export default KnowledgeBase;
