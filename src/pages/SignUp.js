import React from "react";
import { Row, Col, Card, Image, Form, Button } from "antd";
import "./SignUp.css";
import Input from "antd/es/input/Input";
import Checkbox from "antd/es/checkbox/Checkbox";
import { Link } from "react-router-dom";
const SignUp = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div style={{ backgroundColor: "#FFF5EB", width: "100%", height: "100%" }}>
      <Row>
        <Col span={24} style={{ textAlign: "center" }}>
          <h2>Welcome to Teacher Signup Page</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12} xs={24} style={{ backgroundColor: "#FFF5EB" }}>
          <Image
            width="100%"
            preview={false}
            src="https://www.jotform.com/blog/wp-content/uploads/2020/07/How-to-create-an-online-lecture.png"
          />
        </Col>
        <Col md={12} xs={24}>
          <Card
            title="This Option is for Teachers only"
            bordered={false}
            style={{ width: "80%", backgroundColor: "#ffeac6" }}
          >
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="TeacherId"
                name="TeacherId"
                rules={[
                  {
                    required: true,
                    message: "Please input your TeacherId!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="unchecked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Row>
                  <Col style={{ marginRight: "1rem" }}>
                    <Button type="primary" htmlType="submit">
                      SignUp
                    </Button>
                  </Col>
                  <Col style={{ marginRight: "1rem", fontWeight: "bold" }}>
                    or
                  </Col>
                  <Col>
                    <Link to="/login">
                      <Button type="primary">Login</Button>
                    </Link>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
