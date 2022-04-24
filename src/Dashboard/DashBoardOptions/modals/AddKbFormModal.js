import { Modal, Button, Form, Select, Upload, message } from "antd";
import { useState } from "react";
import Input from "antd/es/input/Input";
import Checkbox from "antd/es/checkbox/Checkbox";
import { Option } from "antd/es/mentions";
import { UploadOutlined } from "@ant-design/icons";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const AddKbFormModal = (props) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [fileName, setFileName] = useState("");

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };

  const fileProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file added successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Modal
      title="Add KnowledgeBase"
      visible={props.visibility}
      onOk={() => props.handleOkBtnClicked()}
      onCancel={() => props.handleOkBtnClicked()}
    >
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="note" label="File Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="URI" label="URI" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Upload
            action={"http://localhost:5000/api/upload"}
            beforeUpload={(file) => {
              console.log(file);
            }}
            data={(response) => {
              console.log(response.response);
            }}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddKbFormModal;
