import styled from "styled-components";

export const Container = styled.div<{ withRefresh?: boolean | undefined }>`
  ${(props) =>
    props.withRefresh &&
    `
    display:flex;
    align-items:center;
    justify-content:space-between;

  `}
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.1);
`;
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  & p {
    opacity: 0.6;
    font-size: 12px;
  }
  padding-bottom: 8px;
`;

export const RefreshContainer = styled.div``;
