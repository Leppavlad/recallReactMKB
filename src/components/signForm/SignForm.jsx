import React from 'react';
import styled from 'styled-components';

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

export class SignForm extends React.Component {
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
    return (
      <form onSubmit={this.sendForm}>
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
    );
  }
}
