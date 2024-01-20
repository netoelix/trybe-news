import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #0E0E0ED9;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 40px;

  @media screen and (max-width: 1000px) {
    font-size: 25px;
  }
`;
