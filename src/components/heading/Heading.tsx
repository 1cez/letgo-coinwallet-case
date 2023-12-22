import React from "react";

import * as Styled from "./Heading.styled";

import { HeadingProps } from "./types";
import Buttons from "../buttons/Buttons";

const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  withRefresh,
}) => {
  return (
    <>
      <Styled.Container withRefresh={withRefresh}>
        <Styled.HeadingContainer>
          <h3>Budget</h3>
          <p>You can add, delete and edit your coins.</p>
        </Styled.HeadingContainer>
        <Styled.RefreshContainer>
          <Buttons buttonType="refresh" />
        </Styled.RefreshContainer>
      </Styled.Container>
    </>
  );
};

export default Heading;
