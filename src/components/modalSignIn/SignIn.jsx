import React from 'react';
import styled from 'styled-components';

import { Modal } from '../modal/Modal';
import { ButtonCommon } from '../../ui/button/Button';

const FormControl = styled.div`
  input {
    width: 100%;
    height: 40px;
    padding: 0 20px;
    margin-bottom: 10px;
    border: 1px solid #dadada;
    border-radius: 20px;
  }
`;

export class SignModal extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      login: '',
      password: '',
    });
  }

  handleInput = (event) => {
    this.setState((state) => {
      return {
        [event.target.name]: event.target.value,
        ...state,
      };
    });
  };

  sendForm = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { isOpen, onClose } = this.props;
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={this.sendForm}>
          <h2>Авторизация</h2>
          <FormControl>
            <input
              type="text"
              name="login"
              onBlur={this.handleInput}
              placeholder="Логин"
            />
          </FormControl>
          <FormControl>
            <input
              type="text"
              name="password"
              onBlur={this.handleInput}
              placeholder="Пароль"
            />
          </FormControl>
          <ButtonCommon type="submit" mode="purple">
            Войти
          </ButtonCommon>
        </form>
      </Modal>
    );
  }
}
