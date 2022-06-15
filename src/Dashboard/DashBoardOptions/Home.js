import React, { useEffect, useState } from "react";
import { Row, Col, Table, Card, Input, Button } from "antd";
import axios from "axios";
import { SearchOutlined } from "@ant-design/icons";
import { getallKB } from "../../API/api";
import { config } from "../../constance";
const BASEURL = config.url.API_URL;
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => {
      return (
        <>
          <Input
            autoFocus
            placeholder="Type text here"
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          />
          <Button
            onClick={() => {
              confirm();
            }}
            type="primary"
          >
            Search
          </Button>
          <Button
            onClick={() => {
              clearFilters();
            }}
            type="danger"
          >
            Reset
          </Button>
        </>
      );
    },
    filterIcon: () => {
      return <SearchOutlined />;
    },
    onFilter: (value, record) => {
      return record.name.toLowerCase().includes(value.toLowerCase());
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => {
      return (
        <>
          <Input
            autoFocus
            placeholder="Type text here"
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          />
          <Button
            onClick={() => {
              confirm();
            }}
            type="primary"
          >
            Search
          </Button>
          <Button
            onClick={() => {
              clearFilters();
            }}
            type="danger"
          >
            Reset
          </Button>
        </>
      );
    },
    filterIcon: () => {
      return <SearchOutlined />;
    },
    onFilter: (value, record) => {
      return record.name.toLowerCase().includes(value.toLowerCase());
    },
  },
  {
    title: "Question",
    dataIndex: "question",
    key: "questions",
  },
  {
    title: "Date & Time",
    dataIndex: "date",
    key: "date",
  },
];

const KnowledgeBase = () => {
  const [knowledgebaseCount, setKnowledgebaseCount] = useState(0);
  useEffect(() => {
    fetchUserQueries().then((r) => console.log("hi"));
    getKnowledgebases().then((r) => console.log(r));
  }, []);
  const [userQueries, setUserQueries] = useState([]);

  const getKnowledgebases = async () => {
    const KB = await getallKB();
    console.log("Knowledgebases length=" + KB.data.payload.length);
    setKnowledgebaseCount(KB.data.payload.length);
  };
  const fetchUserQueries = async () => {
    const response = await axios
      .get(`${BASEURL}/api/getDetails`)
      .catch((err) => {
        console.log("Error:" + err);
      });
    setUserQueries(response.data);
    console.log(userQueries);
  };

  return (
    <>
      <Row>
        <Col span={6}>
          <Card
            size="small"
            title="Total KnowledgeBases"
            extra={<a href="#">More</a>}
            style={{ width: 300, backgroundColor: "#a29bfe" }}
          >
            <h4>{knowledgebaseCount}</h4>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            size="small"
            title="Total questions"
            extra={<a href="#">More</a>}
            style={{ width: 300, backgroundColor: "#81ecec" }}
          >
            <h4>{userQueries.length}</h4>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            size="small"
            title="Total intents"
            extra={<a href="#">More</a>}
            style={{ width: 300, backgroundColor: "#55efc4" }}
          >
            <h4>40</h4>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: "2rem" }} span={24}>
          <Table dataSource={userQueries} columns={columns} />
        </Col>
      </Row>
    </>
  );
};

export default KnowledgeBase;
