/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import Modal from "./Modal";

function ModalParent() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>
        {show ? "hide" : "show"} modal
      </button>
      <Modal show={show} title="Modal" onClose={() => setShow(false)}>
        <h1>LearnersBucket</h1>
      </Modal>
    </div>
  );
}

export default ModalParent;
