import React from "react";
import Header from "../Header";
import Paragraph from "antd/es/typography/Paragraph";
import { Col, Divider, Typography, Row } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { Link } from "react-router-dom";
import Avatar from "antd/es/avatar/avatar";
import Avatar1 from "../Assests/Images/myImage.a20ca31a.jpg";
import Avatar2 from "../Assests/Images/SamankulaMadam.jpg";
import "./About.css";
import { AntDesignOutlined } from "@ant-design/icons";
import Footer from "../Footer";

const About = () => {
  return (
    <>
      <Header />
      <Typography>
        <Title>About Us</Title>
        <Divider orientation="center">
          <h3>Origin Story</h3>
        </Divider>
        <Row gutter={16}>
          <Col
            lg={{ span: 12, offset: 6 }}
            xs={{ span: 20, gutter: 2, offset: 2 }}
          >
            <div>
              <Paragraph>
                With the Covid-19 pandemic, and the post-pandemic era people
                have moved towards online learning more than ever. Educators and
                learners are being compelled to use online teaching/learning
                methods. However, there have always been ideologies and
                criticisms about online learning over traditional learning. For
                example, take an online class with 30 students, individual
                attention for each kid would be difficult even within the
                physical class. So, in an online class, it will be worse. Almost
                impossible for the teacher to give unique opportunities to each
                child. Because of the individual differences in students in a
                classroom, their perception of a particular lesson will be at
                different levels. They will have different problems which need
                the teacher’s attention but due to the limited time factor,
                which is ignored to the frustration of both the teacher and the
                learner. Since the students are engaged in their education
                through online platforms, they are also exposed to other
                websites. Keeping them positively engaged in their subjective
                field has been a challenge both to teachers and parents. <br />
                <br />
                Today, <Text strong> Chatbots </Text> are mainly used in
                e-commerce platforms communicating with thousands of customers,
                solving their problems, getting feedback identifying their needs
                and thinking patterns. So, isn’t it possible to use the same
                technology and principle in the educational sector?{" "}
                <Text strong> eduBot was created to serve this purpose.</Text>
                EduBot is chat based learning assistant, representing the
                teacher for further knowledge and individual assistance after
                the lesson is over. The boredom of the online lessons where a
                teacher would be rushing through her subject and the students
                being passive listeners will end if the assistance of a eduBot
                is taken. The children will interact, and it will kindle their
                enthusiasm for the particular subject. The parents’ precious
                time (to assist their kids through their homework) will be
                saved. By referring to the chatbots chat history database, the
                teacher could plan her lesson further and better.
              </Paragraph>
            </div>
          </Col>
        </Row>
        <Divider orientation="center">
          <h3>Technologies used</h3>
        </Divider>
        <Row gutter={16}>
          <Col
            lg={{ span: 12, offset: 6 }}
            xs={{ span: 20, gutter: 2, offset: 2 }}
          >
            <div>
              <Paragraph>
                This application is a Single Page Application developed using
                state of art technology React JS framework. Uses node v14.17.0
                as the backend technology. The eduBot is powered by dialogflow
                which is the largest NLU platform introduced by google. For the
                database functionalities MongoDB is used and for the cloud
                functionalities Google cloud is being used in the project.
              </Paragraph>
            </div>
          </Col>
        </Row>
        <Divider orientation="center">
          <h3>Creative Team</h3>
        </Divider>
        <Row gutter={16}>
          <Col
            lg={{ span: 12, offset: 6 }}
            xs={{ span: 20, gutter: 2, offset: 2 }}
          >
            <Row>
              <Col
                span={12}
                style={{
                  textAlign: "center",
                  marginTop: "1em",
                  marginBottom: "2em",
                }}
              >
                <Avatar
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 120 }}
                  icon={<AntDesignOutlined />}
                  src={Avatar2}
                />
                <h5>
                  <span>
                    Supervisor and Mentor <br /> Mrs. W.G.D.M. Samankula (Senior
                    Lecturer Grade II) B.Sc. (Special)(Kelaniya), M.Phil.
                    (Computer Science, Kelaniya)
                  </span>
                </h5>
              </Col>
              <Col
                span={12}
                style={{
                  textAlign: "center",
                  marginTop: "1em",
                  marginBottom: "2em",
                }}
              >
                <Avatar
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 120 }}
                  icon={<AntDesignOutlined />}
                  src={Avatar1}
                />
                <h5>
                  <span>
                    Design and Development <br />
                    Mr D.P.B Manakal
                    <br /> Undergraduate University Of Kelaniya.
                  </span>
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Typography>
      <Footer />
    </>
  );
};

export default About;
