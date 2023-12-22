import React from "react";

import { PlusOutlined, EditOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, FloatButton, Tooltip } from "antd";

import * as Styled from "./Buttons.styled";
import { ButtonsProps } from "./types";

const Buttons: React.FC<ButtonsProps> = ({
  title,
  buttonType,
  value,
  setValue,
}) => {
  const valueSetter = () => {
    if (setValue) {
      setValue(!value);
    }
  };

  const typeSelector = () => {
    switch (buttonType) {
      case "default":
        return (
          <Button type="primary" onClick={valueSetter}>
            {title}
          </Button>
        );
      case "shape":
        return (
          <Button shape="circle" type="primary" onClick={valueSetter}>
            {title}
          </Button>
        );
      case "float":
        return (
          <FloatButton.Group
            trigger="hover"
            type="primary"
            style={{ right: 94 }}
            className="float-btn"
            icon={<EditOutlined />}
          >
            <FloatButton onClick={valueSetter} icon={<PlusOutlined />} />
          </FloatButton.Group>
        );
      case "refresh":
        return (
          <Tooltip title="Refresh">
            <Button
              type="primary"
              shape="circle"
              icon={<ReloadOutlined />}
              onClick={() => window.location.reload()}
            />
          </Tooltip>
        );
      default:
        return <Button type="primary">{title}</Button>;
    }
  };

  return <Styled.ButtonsContainer>{typeSelector()}</Styled.ButtonsContainer>;
};

export default Buttons;
