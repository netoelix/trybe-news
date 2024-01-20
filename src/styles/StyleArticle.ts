import styled from 'styled-components';

export const ArticleContainer = styled.section`
  background-color: #F1F2F3;
  color: #2A2A2A;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;

  article {
    width: 350px;
    height: 350px;
    margin: 20px;
    padding: 20px;
    box-shadow: 0px 2px 14px rgba(42, 42, 42, 0.24);
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
    color: #2A2A2A;

    h3 {
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      text-align: justify;
    }

    p {
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      text-align: justify;
    }
    
    div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      a {
        border-radius: 5px;
        background: #05D465;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        width: 167px;
        height: 36px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #000;
        font-size: 14px;
        text-decoration: none;
        font-style: normal;
        font-weight: 700;
      }
    }
  }

  button {
    background-color: transparent;
    border: none;

    img {
      width: 23px;
    }
  }

  @media screen and (max-width: 1000px) {
    article {
      width: 300px;
      height: 380px;
      margin: 5px;
    }
  }
`;
