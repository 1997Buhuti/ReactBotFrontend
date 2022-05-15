import React, { useState } from "react";
import { Row, Col, Card, Image, Form, Button } from "antd";
import Input from "antd/es/input/Input";
import Checkbox from "antd/es/checkbox/Checkbox";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
const Login = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onLoginClick = () => {
    let email = userName;
    let pd = password;

    axios
      .post("http://localhost:5000/login", {
        email: email,
        password: pd,
      })
      .then((response) => {
        if (response.data.result) {
          navigate("/dashboard");
        }
      });
  };

  return (
    <>
      <Row>
        <Col span={24} style={{ textAlign: "center" }}>
          <h2>Welcome to Teacher Login</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12} xs={24}>
          <Image
            width="80%"
            preview={false}
            src="https://storage.googleapis.com/chatbot_resources/Teacher_Login_image.jpg"
          />
        </Col>
        <Col md={12} xs={24}>
          <Card
            bordered={false}
            style={{ width: "80%" }}
            title="This Option is for Teachers only"
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
                <Input onChange={handleUserNameChange} />
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
                <Input.Password onChange={handlePasswordChange} />
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
                    <Button
                      type="primary"
                      htmlType="submit"
                      onClick={onLoginClick}
                    >
                      Login
                    </Button>
                  </Col>
                  <Col>
                    <Link to="/signup">
                      <Button type="primary">SignUp</Button>
                    </Link>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Login;
