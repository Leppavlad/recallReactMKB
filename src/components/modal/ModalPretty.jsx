import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import { Modal } from './Modal';

const duration = 300;

const ModalTransitioned = styled(Modal)`
  &.modal-transition-enter {
    opacity: 0;
  }
  &.modal-transition-enter-active {
    opacity: 1;
    transition: opacity ${duration}ms;
  }
  &.modal-transition-exit {
    opacity: 1;
  }
  &.modal-transition-exit-active {
    opacity: 0;
    transition: opacity ${duration}ms;
  }
`;

export const ModalPretty = ({ isOpen, onClose, ...other }) => {
  return (
    <>
      <CSSTransition
        in={isOpen}
        className="modal-transition"
        classNames="modal-transition"
        unmountOnExit
        timeout={duration}
      >
        <ModalTransitioned open={isOpen} onClose={onClose} {...other} />
      </CSSTransition>
    </>
  );
};
