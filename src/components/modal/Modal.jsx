import React from 'react';
import { createPortal } from 'react-dom';

import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  z-index: 1000;
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
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 34px;
    cursor: pointer;
  }
`;

export class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isOpen, onClose, children } = this.props;
    const closeModal = (e) => {
      const { target } = e;
      if (target.getAttribute('data-modal') === 'close') {
        onClose();
      }
    };
    if (!isOpen) {
      document.querySelector('body').classList.remove('overflow');
      return null;
    } else {
      document.querySelector('body').classList.add('overflow');
      return createPortal(
        <Overlay onClick={closeModal} data-modal="close">
          <Content className="modal__content">
            <button
              className="modal__close"
              onClick={closeModal}
              data-modal="close"
            >
              &times;
            </button>
            {children}
          </Content>
        </Overlay>,
        document.querySelector('body')
      );
    }
  }
}
