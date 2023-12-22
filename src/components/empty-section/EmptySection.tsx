import React from "react";

import { Button, Empty } from "antd";

import * as Styled from "./EmptySection.styled";

import { EmptyProps } from "./types";

const EmptySection: React.FC<EmptyProps> = ({ state, setState }) => {
  return (
    <>
      <Styled.EmptyContainer>
        <Empty
          image="https://images.template.net/84460/free-wallet-illustrations-2btia.jpg"
          imageStyle={{ height: 60 }}
          description={<span>Add coins to your budget.</span>}
        >
          <Button type="primary" onClick={() => setState(!state)}>
            Add Coin
          </Button>
        </Empty>
      </Styled.EmptyContainer>
    </>
  );
};

export default EmptySection;
