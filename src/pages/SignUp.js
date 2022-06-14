import React, { useState } from "react";
import { Row, Col, Card, Image, Form, Button } from "antd";
// import "./SignUp.css";
import Input from "antd/es/input/Input";
import Checkbox from "antd/es/checkbox/Checkbox";
import { Link } from "react-router-dom";
import axios from "axios";
import notify from "../Services/NotificationService/NotificationService";
import { config } from "../constance";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [teacherId, setTeacherId] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleTeacherIdChange = (e) => {
    setTeacherId(e.target.value);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const clearFields = () => {
    setTeacherId("");
    setPassword("");
    setTeacherId("");
  };

  const onSignUpClick = () => {
    const BASEURL = config.url.API_URL;
    axios
      .post("{$BASEURL}/api/addNewUser", {
        email: userName,
        teacherId: teacherId,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          notify("addNewUser");
          clearFields();
        } else {
          console.log(response);
          notify("Error!");
        }
      });
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
                <Input onChange={handleUserNameChange} value={userName} />
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
                <Input onChange={handleTeacherIdChange} value={teacherId} />
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
                <Input.Password
                  onChange={handlePasswordChange}
                  value={password}
                />
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
                      onClick={onSignUpClick}
                    >
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
