import styled from "styled-components";

export const TablesContainer = styled.div`
  .ant-select {
    display: none !important;
  }
  .actions {
    display: flex;
    gap: 6px;
    &-btn {
      border: none;
      cursor: pointer;
      background-color: rgb(23, 169, 72);
      color: white;
      padding: 4px 8px;
      border-radius: 8px;
      &:hover {
        background-color: lime;
        transition: 0.3s;
      }
    }
  }
  .last-price {
    display: flex;
    align-items: center;
    gap: 4px;

    .fa-sort-up {
      color: rgb(23, 169, 72);
      padding-top: 4px;

    }
    .fa-sort-down {
      color: red;
      padding-bottom: 8px;
    }
  }
`;
