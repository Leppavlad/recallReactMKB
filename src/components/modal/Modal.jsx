import React from 'react';
import { createPortal } from 'react-dom';

import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-content: center;
`;
const Content = styled.div`
  position: relative;
  min-width: 300px;
  max-width: 600px;
  min-height: 300px;
  padding: 30px;
  background-color: #fff;

  .modal__close {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

export const Modal = ({ message, isOpen, onClose, children }) => {
  if (!isOpen) {
    document.querySelector('body').classList.remove('overflow');
    return null;
  } else {
    document.querySelector('body').classList.add('overflow');
    return createPortal(
      <Overlay>
        <Content>
          <button className="modal__close" onClick={onClose}>
            &times;
          </button>
          {children}
        </Content>
      </Overlay>,
      document.querySelector('body')
    );
  }
};
