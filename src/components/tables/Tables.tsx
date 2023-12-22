import React, { useState } from "react";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

import Search from "../search/Search";
import * as Styled from "./Tables.styled";

import { TableDataType, TableProps } from "./types";
import { ICoinsResponse } from "../../pages/coin-manager/types";
import NumberInput from "../number-input/NumberInput";

const Tables: React.FC<TableProps> = ({ data, withSearchBar }) => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [count, setCount] = useState<number>(1);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const columns: ColumnsType<TableDataType> = [
    {
      title: "Coin Name",
      dataIndex: "coinName",
      key: "coinName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Last Price",
      dataIndex: "lastPrice",
      key: "lastPrice",
      render: (text, record) => (
        <span className="last-price">
          {(record.prevPrice < record.lastPrice && (
            <i className="fa-solid fa-sort-up" />
          )) || <i className="fa-solid fa-sort-down" />}
          {text}$
        </span>
      ),
    },
    {
      title: "Previous Price",
      dataIndex: "prevPrice",
      key: "prevPrice",
      render: (prevPrice) => <span className="last-price">{prevPrice}$</span>,
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <div className="actions">
          <Space size="middle">
            <NumberInput
              onChange={(value: any) => setCount(value)}
              coinName={record.coinName}
            />
          </Space>
          <Space size="middle">
            <button className="actions-btn" onClick={() => handleAdd(record)}>
              Add
            </button>
          </Space>
        </div>
      ),
    },
  ];

  const handleAdd = (record: TableDataType) => {
    const existingData = JSON.parse(localStorage.getItem("addedCoins") || "[]");

    const existingCoinIndex = existingData.findIndex(
      (item: TableDataType) => item.key === record.key
    );

    if (existingCoinIndex !== -1) {
      existingData[existingCoinIndex].count = count;
    } else {
      existingData.push({ ...record, count });
    }

    localStorage.setItem("addedCoins", JSON.stringify(existingData));
  };

  const coinData: TableDataType[] = data?.map(
    (item: ICoinsResponse, index: number) => ({
      key: index,
      coinName: item.symbol,
      lastPrice: item.lastPrice,
      prevPrice: item.prevClosePrice,
      weightedAvgPrice: item.weightedAvgPrice,
    })
  );

  const filteredData = searchValue
    ? coinData.filter((item) =>
        item.coinName.toLowerCase().includes(searchValue.toLowerCase())
      )
    : coinData;

  return (
    <Styled.TablesContainer>
      {withSearchBar && (
        <Search title={"Search"} placeholder="Search" onSearch={handleSearch} />
      )}

      <Table
        columns={columns}
        dataSource={filteredData}
        loading={!data}
        pagination={{
          defaultPageSize: 10,
        }}
      />
    </Styled.TablesContainer>
  );
};

export default Tables;
