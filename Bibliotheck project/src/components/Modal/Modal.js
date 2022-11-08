/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./index.css";
import App from "./App";

function Modal() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(!openModal);
    }, 2000);
  }, []);

  return (
    <div>
      <App open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default Modal;
