import { Modal, Button } from "antd";
import { useState } from "react";

const AddKbFormModal = (props) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  return (
    <Modal
      title="Basic Modal"
      visible={props.visibility}
      onOk={() => props.handleOkBtnClicked()}
      onCancel={() => props.handleOkBtnClicked()}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default AddKbFormModal;
