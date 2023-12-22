import React, { useEffect, useState } from "react";
import { InputNumber } from "antd";
import * as Styled from "./NumberInput.styled";
import { NumberInputProps } from "./types";

const NumberInput: React.FC<NumberInputProps> = ({ coinName, onChange }) => {
  const [defaultValue, setDefaultValue] = useState<number>(1);

  useEffect(() => {
    const handleStorageData = () => {
      const storage = JSON.parse(localStorage.getItem("addedCoins") || "[]");
      const foundItem = storage.find((item: any) => item.coinName === coinName);

      if (foundItem) {
        setDefaultValue(foundItem.count);
      }
    };

    handleStorageData();

    const intervalId = setInterval(handleStorageData, 3000);

    return () => clearInterval(intervalId);
  }, [coinName]);

  return (
    <Styled.NumberInputContainer>
      <InputNumber min={1} value={defaultValue} onChange={onChange} />
    </Styled.NumberInputContainer>
  );
};

export default NumberInput;
