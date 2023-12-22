import styled from "styled-components";

export const CoinManagerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const BudgetContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media only screen and (max-width: 968px) {
    flex-direction: column;
  }
`;
export const Budget = styled.div`
  width: 100%;
`;
export const BudgetInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & span {
    font-weight: 700;
  }
`;
export const BudgetItems = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  padding: 1rem;
`;
export const BudgetTitle = styled.div``;

export const BudgetChart = styled.div`
  width: 100%;
`;
