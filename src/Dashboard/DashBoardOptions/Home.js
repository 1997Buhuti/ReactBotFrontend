import React from "react";
import { Row, Col, Table, Card } from "antd";
//import Row from "antd/es/descriptions/Row";

const KnowledgeBase = () => {
  return (
    <Row>
      <Col span={12}>
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col span={12}>
        <Card
          size="small"
          title="Small size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
    </Row>
  );
};

export default KnowledgeBase;
