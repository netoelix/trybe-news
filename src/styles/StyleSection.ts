import styled from 'styled-components';

export const SectionContainer = styled.section`
  background-color: #F1F2F3;
  color: black;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  margin: 100px 0px;

    span {
        color: #C31815;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
    }

    h2 {
      font-size: 32px;
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
`;
