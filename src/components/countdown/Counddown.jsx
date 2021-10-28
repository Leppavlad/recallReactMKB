import { Component } from 'react';
import styled from 'styled-components';

const CountdownWrapper = styled.div`
  display: flex;
  gap: 30px;
  color: #fff;

  @media screen and (max-width: 480px) {
    gap: 5px;
  }
`;
const CountdownBlock = styled.div`
  display: grid;
  place-content: center;
  width: 100px;
  height: 100px;
  background-color: #121212;

  @media screen and (max-width: 480px) {
    width: 80px;
    height: 80px;
  }

  .key {
    text-transform: capitalize;
    color: #666;
  }
  .value {
    font-size: 3.8rem;
    text-align: center;
  }
`;

export class Countdown extends Component {
  expectingDate = null;
  intervalId = null;

  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  constructor({ date }) {
    super();
    this.expectingDate = date;
    this.setState(this.getTimeRemaining());
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setTime();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  setTime = () => {
    this.setState({ ...this.getTimeRemaining() });
  };

  getTimeRemaining = () => {
    const current = new Date().getTime();
    const expecting = new Date(this.expectingDate).getTime();

    const remainsSec = (expecting - current) / 1000;
    return {
      days: Math.floor(remainsSec / 60 / 60 / 24),
      hours: Math.floor((remainsSec / 60 / 60) % 24),
      minutes: Math.floor((remainsSec / 60) % 60),
      seconds: Math.floor(remainsSec % 60),
    };
  };

  render() {
    const { days, hours, minutes, seconds } = this.state;
    const transformDate = (time) => {
      return time < 10 ? `0${time}` : time;
    };

    return (
      <CountdownWrapper>
        <CountdownBlock>
          <div className="value">{transformDate(days)}</div>
          <div className="key">дней</div>
        </CountdownBlock>
        <CountdownBlock>
          <div className="value">{transformDate(hours)}</div>
          <div className="key">часов</div>
        </CountdownBlock>
        <CountdownBlock>
          <div className="value">{transformDate(minutes)}</div>
          <div className="key">минут</div>
        </CountdownBlock>
        <CountdownBlock>
          <div className="value">{transformDate(seconds)}</div>
          <div className="key">секунд</div>
        </CountdownBlock>
      </CountdownWrapper>
    );
  }
}
