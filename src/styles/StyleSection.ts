import styled from 'styled-components';

export const SectionContainer = styled.section`
  color: #2A2A2A;
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
      margin-bottom: 5px;
  }

  h2 {
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    text-align: justify;
    margin-bottom: 20px;
  }

  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    text-align: justify;
    margin-bottom: 20px;
  }

  div {
      display: flex;
      flex-direction: row-reverse;
      flex-wrap: wrap;
      align-content: flex-end;
      justify-content: flex-start;
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
      margin:10px 0px 10px 20px;
    }
  }

  button {
  background-color: transparent;
  border: none;

  img {
    width: 23px;
  }
}
`;
