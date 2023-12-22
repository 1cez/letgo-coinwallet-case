import styled from "styled-components";

export const CoinCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 16px;
  border-radius: 8px;
  & div:nth-child(odd) {
    font-weight: 500;
  }
  & button {
    background-color: rgb(223, 71, 89);
    border: none;
    color: white;
    padding: 4px 2px;
    border-radius: 6px;
    width: 30px;
    &:hover {
      background-color: red;
      transition: 0.6s;
      cursor: pointer;
    }
  }
`;
