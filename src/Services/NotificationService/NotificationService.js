import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const notify = (messageType) => {
  switch (messageType) {
    case "Default!":
      toast("Default!", { position: toast.POSITION.TOP_LEFT });
      break;
    case "Success!":
      toast.success("Success!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 8000,
      });
      break;

    case "Info!":
      toast.info("Info!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
      });
      break;
    case "warn":
      toast.warn({
        position: toast.POSITION.BOTTOM_LEFT,
      });
      break;
    case "addNewUser":
      toast.info("User Added Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    case "deleteSuccess":
      toast.info("KnowledgeBase Deleted Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    case "Error!":
      toast.error("Error!", { position: toast.POSITION.BOTTOM_CENTER });
      break;
    default:
      toast("Wow so easy !", { position: toast.POSITION.BOTTOM_RIGHT });
  }
};
export default notify;
