import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import logo from '../../assets/icons/logo.png';
import { ButtonCommon } from '../../ui/button/Button';

// import { Modal } from '../modal/Modal';
import { SignModal } from '../modalSignIn/SignIn';

const HeaderSection = styled.section`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  padding: 40px 0;
  transition: all 0.3s;

  &.dark {
    background-color: #121212;
    height: 80px;
    padding: 15px 0;
    transition: all 0.3s;
  }

  @media screen and (max-width: 1340px) {
    background-color: #121212;
    height: 80px;
    padding: 15px 0;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1340px) {
    justify-content: flex-start;
  }
`;
const HeaderLogo = styled.div`
  cursor: pointer;
  transform: scale(1);

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 1340px) {
    margin-right: auto;
  }
`;
const HeaderMenu = styled.nav`
  ul {
    display: flex;

    li {
      display: block;
      a {
        position: relative;
        display: block;
        width: fit-content;
        margin-top: -10px;
        padding: 10px 28px;
        text-decoration: none;
        color: #fff;

        &.active {
          color: #df5950;

          &::after {
            background-color: #df5950;
            transform: scaleX(1);
          }
        }

        &::after {
          content: '';
          position: absolute;
          bottom: 0px;
          left: 28px;
          width: calc(100% - 56px);
          height: 2px;
          background-color: #fff;
          transform: scaleX(0);
        }

        &:hover {
          &::after {
            transform: scaleX(1);
            transition: transform 0.2s;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1340px) {
    display: none;
    place-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    background-color: #121212;

    &.active {
      display: grid;
      z-index: 1000;
    }
    ul {
      flex-direction: column;
      width: inherit;
      padding: 0;

      li {
        display: flex;
        align-items: center;
        height: 50px;
        a {
          width: 100%;
          height: 100%;
          padding: 15px 25px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
      }
    }
  }
`;
const MobileClose = styled.div`
  display: none;
  @media screen and (max-width: 1340px) {
    position: absolute;
    top: 20px;
    right: 20px;
    display: block;
    color: #fff;
    font-size: 36px;
  }
`;
const MobileToggler = styled.div`
  display: none;

  &:active {
    transform: translate(-1px, -1px);
  }

  @media screen and (max-width: 1340px) {
    display: grid;
    place-content: center;
    width: 50px;
    height: 50px;
    margin-left: 40px;
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);

    div {
      position: relative;
      width: 30px;
      height: 3px;
      background-color: #fff;

      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        width: 30px;
        height: 3px;
        background-color: #fff;
      }

      &::before {
        top: -10px;
      }
      &::after {
        top: 10px;
      }
    }
  }
`;

export const TheHeader = () => {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header__section');
    if (document.documentElement.scrollTop > 100) {
      header.classList.add('dark');
    } else {
      header.classList.remove('dark');
    }
  });

  // mobileMenu
  const [mobileMenu, changeMobileMenuState] = useState(false);
  const toggleMobileMenu = () => {
    changeMobileMenuState(!mobileMenu);
  };

  //auth modal
  const [authModalIsShown, toggleAuthModalVisibility] = useState(false);
  const toggleAuthModal = () => {
    toggleAuthModalVisibility(!authModalIsShown);
  };

  return (
    <>
      <HeaderSection className="header__section">
        <div className="container-fluid">
          <HeaderWrapper>
            <HeaderLogo>
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </HeaderLogo>
            <HeaderMenu className={`${mobileMenu ? 'active' : ''}`}>
              <MobileClose onClick={toggleMobileMenu}>&times;</MobileClose>
              <ul>
                <li>
                  <Link to="/">Главная</Link>
                </li>
                <li>
                  <Link to="/courses">Курсы</Link>
                </li>
                <li>
                  <Link to="/schedule">Расписание</Link>
                </li>
                <li>
                  <Link to="/tutors">Преподаватели</Link>
                </li>
                <li>
                  <Link to="/subscription">Рассылка</Link>
                </li>
                <li>
                  <Link to="/contacts">Контакты</Link>
                </li>
              </ul>
            </HeaderMenu>
            <ButtonCommon mode="purple" onClick={toggleAuthModal}>
              Зайти в кабинет
            </ButtonCommon>
            <SignModal isOpen={authModalIsShown} onClose={toggleAuthModal} />
            {/* <Modal isOpen={authModalIsShown} onClose={toggleAuthModal}></Modal> */}
            <MobileToggler className="toggler" onClick={toggleMobileMenu}>
              <div style={{ userEvents: 'none' }}></div>
            </MobileToggler>
          </HeaderWrapper>
        </div>
      </HeaderSection>
    </>
  );
};
