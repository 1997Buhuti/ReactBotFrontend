import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
const PdfBasedKnowledgeBase = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={require("../../Assests/Images/Maintenance Mode.png")}
        alt="Under Maintenance"
      />
      <div>
        <Button
          type="primary"
          shape="round"
          size="large"
          onClick={() => navigate("/dashboard")}
        >
          Back to Main Menu
        </Button>
      </div>
    </div>
  );
};

export default PdfBasedKnowledgeBase;
