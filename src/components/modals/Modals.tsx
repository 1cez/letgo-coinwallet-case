import React from "react";

import { Modal } from "antd";

import * as Styled from "./Modals.styled";

import { ModalProps } from "./types";

const Modals: React.FC<ModalProps> = ({
  children,
  title,
  isModalOpen,
  setIsModalOpen,
}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Styled.ModalContainer>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={700}
        style={{ top: 30 }}
      >
        {children}
      </Modal>
    </Styled.ModalContainer>
  );
};

export default Modals;
