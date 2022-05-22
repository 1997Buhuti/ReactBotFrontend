import React, { useEffect, useState } from "react";
import { Button, Form, Space, Spin, Table } from "antd";
import { getallKB } from "../../API/api";
import {
  CloudDownloadOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import axios from "axios";
import Modal from "antd/es/modal/Modal";
import AddKbFormModal from "./modals/AddKbFormModal";
import notify from "../../Services/NotificationService/NotificationService";

const KnowledgeBase = () => {
  const [knowledgebase, setKnowledgebase] = useState([]);
  const [knowledgebaseSize, setKnowledgebaseSize] = useState(1);
  const [visible, setVisible] = useState(false);
  const [spinner, enableSpinner] = useState(false);

  useEffect(() => {
    getKnowledgebases();
  }, []);

  const showModal = () => {
    setVisible(true);
  };
  // Service for downloading the knowledgebase csv
  const onDownloadClick = (params) => {
    axios({
      url: `http://localhost:5000/api/files/${params}`,
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${params}.csv`); //only csv for KB
      document.body.appendChild(link);
      link.click();
    });
  };

  const onDeleteClick = (parmas) => {
    const knowledgeBaseToDelete = knowledgebase.filter((item) => {
      if (item.displayName === parmas) {
        return item;
      }
    });
    enableSpinner(true);
    axios
      .post("http://localhost:5000/api/deletedKB", {
        docName: knowledgeBaseToDelete[0].name,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          notify("deleteSuccess");
          setKnowledgebase(
            knowledgebase.filter((item) => item.displayName !== parmas)
          );
        } else {
          console.log(response);
          notify("Error!");
        }
        enableSpinner(false);
      });
    console.log("this is the document to be deleted");
    console.log(knowledgeBaseToDelete);
    console.log(knowledgeBaseToDelete[0].name);
  };

  const handleOkBtnClicked = async (payload) => {
    console.log("handleOkBtnClicked");
    const res = await axios.post("http://localhost:5000/api/uploadKB", {
      documentName: payload.fileName,
      documentPath: payload.uri,
    });
    console.log(res);
    setVisible(false);
  };

  const formRef = React.createRef();

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "displayName",
      key: "name",
    },
    {
      title: "KnowledgeType",
      dataIndex: "knowledgeTypes",
      key: "knowledgeTypes",
    },
    {
      title: "FileType",
      dataIndex: "mimeType",
      key: "mimeType",
    },
    {
      title: "URI",
      dataIndex: "contentUri",
      key: "contentUri",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <CloudDownloadOutlined
            style={{ fontSize: "16px", cursor: "pointer", color: "blue" }}
            onClick={() => onDownloadClick(record.displayName)}
          >
            <a
              href={`https://storage.googleapis.com/chatbot_knowledgebases/${record.displayName}`}
            />
          </CloudDownloadOutlined>
          <DeleteOutlined
            style={{ fontSize: "16px", cursor: "pointer", color: "red" }}
            onClick={() => onDeleteClick(record.displayName)}
          />
        </Space>
      ),
    },
  ];

  const getKnowledgebases = async () => {
    const KB = await getallKB();
    if (KB.error) {
      console.log("error");
      console.log(KB.error);
    } else {
      console.log("worked");
      setKnowledgebase(KB.data.payload);
      console.log(knowledgebase);
      setKnowledgebaseSize(knowledgebase.length);
      console.log(knowledgebaseSize);
    }
  };
  return (
    <>
      <Table dataSource={knowledgebase} columns={columns} />
      <Button
        type="primary"
        shape="round"
        icon={<PlusOutlined />}
        size="large"
        onClick={showModal}
      >
        Add KnowledgeBase{" "}
      </Button>
      {spinner && <Spin size="large" style={{ marginLeft: "10em" }} />}
      <AddKbFormModal
        visibility={visible}
        handleOkBtnClicked={handleOkBtnClicked}
        handleCancel={handleCancel}
      />
    </>
  );
};
export default KnowledgeBase;
