import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #0E0E0ED9;
  color: #FFFFFF;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 40px;
  img {
    margin-right: 20px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 25px;
    height: 150px;
  }
`;
