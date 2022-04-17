import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import { getallKB } from "../../API/api";
import { CloudDownloadOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

const KnowledgeBase = () => {
  const [knowledgebase, setKnowledgebase] = useState([]);
  const [knowledgebaseSize, setKnowledgebaseSize] = useState(1);
  useEffect(() => {
    getKnowledgebases();
  }, []);

  const onDeleteClick = (params) => {
    console.log("WTF");
    console.log(params);
    axios
      .get(`https://storage.googleapis.com/chatbot_knowledgebases/${params}`)
      .then((res) => res.data);
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
            onClick={() => onDeleteClick(record.displayName)}
          >
            <a
              href={`https://storage.googleapis.com/chatbot_knowledgebases/${record.displayName}`}
            />
          </CloudDownloadOutlined>
          <DeleteOutlined
            style={{ fontSize: "16px", cursor: "pointer", color: "red" }}
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
      setKnowledgebaseSize(knowledgebase.length);
      console.log(knowledgebaseSize);
    }
  };
  return <Table dataSource={knowledgebase} columns={columns} />;
};

export default KnowledgeBase;
