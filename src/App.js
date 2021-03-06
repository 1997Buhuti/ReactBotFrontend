import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { RobotOutlined } from "@ant-design/icons";
import Footer from "./Footer";

function App() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const navigate = useNavigate();
  const pageAnimation = {
    hidden: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeOut", duration: 0.5 },
    },
  };
  return (
    <div className="Container-fluid">
      <div className="col-container row">
        <div className="header-container col s12">
          <Header />
        </div>
        <div className="home-container col s12">
          <div className="home-contents-container row">
            <div className="col m2" />
            <motion.div
              className="chatbot-content-container col s12 m4 "
              style={{ paddingTop: "35px" }}
              variants={pageAnimation}
              initial="hidden"
              animate="show"
            >
              <img
                src={require("../src/Assests/Images/CoverBot.jpg")}
                width="auto"
                height="500"
                alt="CoverBot"
              />
            </motion.div>
            <motion.div
              className="chatbot-tagline-container col s12 m4"
              style={{ paddingTop: "35px" }}
              variants={pageAnimation}
              initial="hidden"
              animate="show"
            >
              <Tagline> Hi I'm EduBot your new learning assistant ... </Tagline>
              <div className="col m2" />
            </motion.div>
            {/*<div className="chatbot-content-container col l4 s12" style={{paddingTop: '35px'}}>*/}
            {/*    <Chatbot2/>*/}
            {/*</div>*/}
            <motion.div
              className="chatbot-panel-view-button col s12 m4"
              style={{ paddingTop: "35px" }}
              variants={pageAnimation}
              initial="hidden"
              animate="show"
            >
              <Button
                type="primary"
                block
                shape="round"
                onClick={() => navigate("/chatbot")}
                size="large"
                icon={<RobotOutlined />}
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="header-container col s12">
          <Footer />
        </div>
      </div>
    </div>
  );
}
const homeContainer = styled.div`
  padding-top: 120px;
`;
const Tagline = styled.h1`
  padding-top: 3rem;
  color: #010153;
  font-weight: bold;
  line-height: 1.3;
`;

export default App;
