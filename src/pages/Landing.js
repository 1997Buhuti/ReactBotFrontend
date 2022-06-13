import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Col, Divider, Image, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";
import Avatar from "antd/es/avatar/avatar";
import { AntDesignOutlined } from "@ant-design/icons";
import Avatar2 from "../Assests/Images/SamankulaMadam.jpg";
import Avatar1 from "../Assests/Images/myImage.a20ca31a.jpg";

const Landing = () => {
  return (
    <div>
      <Header />
      <Typography>
        <Title style={{ textAlign: "center", marginBottom: "1em" }}>
          Guidelines For Users
        </Title>
        <Divider orientation="center">
          <h3>For Students</h3>
        </Divider>
        <Row gutter={16}>
          <Col
            lg={{ span: 12, offset: 6 }}
            xs={{ span: 20, gutter: 2, offset: 2 }}
          >
            <div>
              <h4>Asking questions</h4>
              <Paragraph>
                Click getting started button to view the chat interface. Ask any
                question related to your studies as suggested by your teacher.
                Asking questions from the eduBot is simple is that.
              </Paragraph>
            </div>
            <div>
              <h4>FallBack Queries</h4>
              <Paragraph>
                What if the eduBot doesn't know what you are asking? Simple. You
                can easily forward that message to your teacher. A Message will
                be prompted with 2 options whether to send this message to the
                teacher so the teacher can view that message later and reply to
                within the classroom or reprogram the bot with answers.
              </Paragraph>
              <div style={{ textAlign: "center" }}>
                <Image
                  width={500}
                  src="https://storage.googleapis.com/chatbot_resources/messageOption.jpg"
                />
                <p>Figure 1.0: Message with 2 options</p>
              </div>
            </div>
          </Col>
        </Row>
        <Divider orientation="center">
          <h3>For Teachers</h3>
        </Divider>
        <Row gutter={16}>
          <Col
            lg={{ span: 12, offset: 6 }}
            xs={{ span: 20, gutter: 2, offset: 2 }}
          >
            <div>
              <h4>What are knowledgebases?</h4>
              <Paragraph>
                knowledgebases are one of the unique feature that eduBot
                provides for the teachers. Teachers can program eduBot according
                to their requirements by uploading knowledgebase documents
                through the admin portal. Currently for the knowledgebase
                document this application only supports CSV formatted documents.
                These docs contains the question and the particular answer for
                that question. You can get an idea about how the document should
                be formatted using the following sample q&a document.
              </Paragraph>
            </div>
            <div>
              <h4>How to use Dashboard?</h4>
              <Paragraph>
                The admin panel provides a dashboard with several valuable
                information to the teacher. Through this dashboards the teacher
                can view what the questions that chatbot was unable to answer
                and the queries forwarded by children to the teacher. Through
                these information teacher can get an understanding about what
                are common questions that children had and the questions the
                eduBot couldn't answer. So the teacher can update the chatbot
                knowledgebase with the necessary questions and answers. This
                dashboard also provides realtime indicators for number of
                knowledgebases intents and the questions asked.
              </Paragraph>
              <div style={{ textAlign: "center" }}>
                <Image
                  width={500}
                  src="https://storage.googleapis.com/chatbot_resources/Dashboard.png"
                />
                <p>Figure 2.0: eduBot Dashboard</p>
              </div>
            </div>
            <div>
              <h4>How to upload knowledgebases?</h4>
              <Paragraph>
                knowledgebases are one of the unique feature that eduBot
                provides for the teachers. Teachers can program eduBot according
                to their requirements by uploading knowledgebase documents
                through the admin portal. Currently for the knowledgebase
                document this application only supports CSV formatted documents.
                These docs contains the question and the particular answer for
                that question. You can get an idea about how the document should
                be formatted using the following sample q&a document.
              </Paragraph>
              <div style={{ textAlign: "center" }}>
                <Image
                  width={500}
                  src="https://storage.googleapis.com/chatbot_resources/Knowledgebases.png"
                />
                <p>Figure 3.0: eduBot Knowledgebase Upload</p>
              </div>
            </div>
          </Col>
        </Row>
      </Typography>
      <Footer />
    </div>
  );
};

export default Landing;
