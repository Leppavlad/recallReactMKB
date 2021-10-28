import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalBackground = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.div`
  position: relative;
  min-width: 300px;
  min-height: 300px;
  padding: 30px;
  background: #fff;
`;

const ModalTitle = styled.h2`
  text-transform: uppercase;
`;
const ModalContent = styled.div``;

const ModalClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  display: grid;
  place-content: center;
  font-size: 34px;
  cursor: pointer;
`;

export const Modal = ({ onClose, title, children, className }) => {
  const closeModal = (event) => {
    const { target } = event;
    if (target.getAttribute('data-modal') === 'close') {
      onClose();
    }
  };

  const modalMarkup = (
    <ModalBackground
      className={className}
      data-modal="close"
      onClick={closeModal}
    >
      <ModalWrapper>
        <ModalClose onClick={onClose}>&times;</ModalClose>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    </ModalBackground>
  );

  return ReactDOM.createPortal(modalMarkup, document.body);
};
