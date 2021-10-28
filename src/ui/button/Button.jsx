import styled from 'styled-components';

const ButtonStyled = styled.button`
  height: 44px;
  padding: 0 30px;
  border: none;
  border-radius: 22px;
  letter-spacing: 1px;
  color: #fff;
  cursor: pointer;

  :active {
    transform: translate(1px, 1px);
  }

  &.gradient {
    background: linear-gradient(#df5950, #451046);
    :hover {
      background: linear-gradient(12deg, #df5950, #451046);
    }
  }
  &.purple {
    background: linear-gradient(#c89afc, #7c6afa);
    :hover {
      background: linear-gradient(12deg, #c89afc, #7c6afa);
    }
  }
`;

export const ButtonCommon = ({ onclick, mode, children, ...other }) => {
  return (
    <ButtonStyled onclick={onclick} className={mode} {...other}>
      {children}
    </ButtonStyled>
  );
};
