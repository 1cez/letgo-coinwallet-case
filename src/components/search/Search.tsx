import React from "react";

import { Input } from "antd";

import * as Styled from "./Search.styled";
import { SearchProps } from "./types";

const Search: React.FC<SearchProps> = ({ title, placeholder, onSearch }) => {
  const handleSearch = (value: string) => {
    onSearch && onSearch(value);
  };
  return (
    <Styled.SearchContainer>
      <Input
        placeholder={placeholder}
        title={title}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </Styled.SearchContainer>
  );
};

export default Search;
