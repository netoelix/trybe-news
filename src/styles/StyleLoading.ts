import styled, { keyframes } from 'styled-components';

const loading = keyframes`
    0% {
        background-color: grey;
    }
    25% {
        background-color: lightgrey;
    }
    50% {
        background-color: grey;
    }
    75% {
        background-color: lightgrey;
    }
    100% {
        background-color: grey;
    }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  div {
    width: 350px;
    height: 370px;
    margin: 20px;
    padding: 20px;
    box-shadow: 0px 2px 14px rgba(42, 42, 42, 0.24);
    background-color: #FFFFFF;
    border-radius: 5px;
    color: transparent;
    animation: ${loading} 2s alternate infinite;
  }
  @media screen and (max-width: 1000px) {
    div {
      width: 350px;
      height: 380px;
      margin: 5px;
    }
  }
`;

export const LoadingHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  margin: 50px 0px;

  div {
    width: 100%;
    height: 370px;
    box-shadow: 0px 2px 14px rgba(42, 42, 42, 0.24);
    background-color: #FFFFFF;
    border-radius: 5px;
    animation: ${loading} 2s alternate infinite;

    span {
      color: transparent;
    }
  }
`;
