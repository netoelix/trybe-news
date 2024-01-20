import styled from 'styled-components';

export const FilterNav = styled.nav`
  color: #2A2A2A;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;

  button {
    border: none;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    padding: 5px;
    margin: 10px;
  }
  .selected {
    border-bottom: 1px solid #C31815;
  }
  .notSelected {
    border-bottom: none;
  }
`;
