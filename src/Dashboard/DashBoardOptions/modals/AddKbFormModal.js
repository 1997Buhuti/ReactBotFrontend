import { Modal, Button, Form, Select, Upload, message } from "antd";
import { useState } from "react";
import Input from "antd/es/input/Input";
import { UploadOutlined } from "@ant-design/icons";
import _ from "lodash";

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
  const [fileName, setFileName] = useState(""); // state for fileName
  const [uri, setUri] = useState(""); // state for URI
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };

  //handler for changing the filename input
  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  //handler for changing the URI input
  const handleUriChange = (e) => {
    setUri(e.target.value);
  };

  const okBtnHandler = async (obj) => {
    setConfirmLoading(true);
    if (_.isEmpty(obj)) {
      console.log("error you need to add a file first Bro");
    } else {
      console.log("This is the Obj");
      console.log(obj);
      const res = await props
        .handleOkBtnClicked(obj)
        .then(setConfirmLoading(false));
    }
  };

  return (
    <Modal
      title="Add KnowledgeBase"
      visible={props.visibility}
      onOk={() => okBtnHandler({ fileName, uri })}
      onCancel={() => props.handleCancel()}
      confirmLoading={confirmLoading}
    >
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="fileName"
          label="File Name"
          rules={[{ required: true }]}
          initialValue={fileName}
          onChange={handleFileNameChange}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="URI"
          label="URI"
          rules={[{ required: true }]}
          onChange={handleUriChange}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Upload
            action={"http://localhost:5000/api/upload"}
            beforeUpload={(file) => {
              if (file) {
                console.log(file);
                form.setFieldsValue({ fileName: file.name });
                setFileName(file.name);
              }
            }}
            data={(response) => {
              console.log(response.response);
            }}
            onChange={(info) => {
              if (info.file.status === "done") {
                // Handle response from API
                console.log(info.file.response);
                form.setFieldsValue({ URI: info.file.response.gsutilURI });
                setUri(info.file.response.gsutilURI);
              }
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
