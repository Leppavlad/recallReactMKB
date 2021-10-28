import React from 'react';
import styled from 'styled-components';

import background from '../../../../assets/images/main-screen__bg.jpg';

import { ButtonCommon } from '../../../../ui/button/Button';
import { Countdown } from '../../../../components/countdown/Counddown';

const MainSection = styled.section`
  position: relative;
  padding: 270px 0 380px;
  background: url('${background}') no-repeat center/cover;

  @media screen and (max-width: 576px) {
    padding: 170px 0 350px;
  }
`;
const MainCountdown = styled.div`
  max-width: 920px;

  h1 {
    font-size: 64px;
    font-weight: 700;
    line-height: 90px;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 45px;
      line-height: 55px;
    }
  }
`;
const MainBuy = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 130px;
  padding: 36px 0;
  background-color: #121212;
`;
const MainBuyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px 80px;
`;
const MainBuyStats = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    gap: 30px;

    span {
      color: #666;

      &:last-of-type {
        color: #fff;
      }
    }
  }
`;
const MainBuyRange = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  flex: 1 0 320px;
  color: #666;
`;
const RangeOuter = styled.div`
  width: 100%;
  height: 6px;
  background-color: #fff;
`;
const RangeInner = styled.div`
  width: 40%;
  height: 100%;
  background: linear-gradient(94.78deg, #df5950 11.19%, #451046 93.72%);
`;
const RangeHeader = styled.div`
  span {
    margin-left: 30px;
    color: #fff;
  }
`;
const RangeFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MainPromo = () => {
  return (
    <MainSection>
      <div className="container">
        <MainCountdown>
          <h1>Первый курс по компьютерной сборке</h1>
          <Countdown date="2021-10-29" />
        </MainCountdown>
      </div>
      <MainBuy>
        <div className="container">
          <MainBuyWrapper>
            <ButtonCommon mode="gradient" style={{ flex: '0 0 170px' }}>
              Заказать курс
            </ButtonCommon>
            <MainBuyStats style={{ flex: '0 0 250px' }}>
              <div>
                <span>Учеников всего:</span>
                <span>200</span>
              </div>
              <div>
                <span>Успешно закончили курс:</span>
                <span>190</span>
              </div>
            </MainBuyStats>
            <MainBuyRange>
              <RangeHeader>
                Заработано учениками: <span>400000руб</span>
              </RangeHeader>
              <RangeOuter>
                <RangeInner></RangeInner>
              </RangeOuter>
              <RangeFooter>
                <span>0</span>
                <span>1000000руб</span>
              </RangeFooter>
            </MainBuyRange>
          </MainBuyWrapper>
        </div>
      </MainBuy>
    </MainSection>
  );
};
