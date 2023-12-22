import React, { useEffect, useState } from "react";

import { useQuery } from "react-query";

import PieChart from "../../components/pie-chart/PieChart";
import Modals from "../../components/modals/Modals";
import Buttons from "../../components/buttons/Buttons";
import Tables from "../../components/tables/Tables";
import CoinCard from "../../components/coin-card/CoinCard";
import Heading from "../../components/heading/Heading";
import EmptySection from "../../components/empty-section/EmptySection";

import { getCoins } from "../../app/services/coin/endpoints";

import { CoinManagerProps, ICoinsResponse } from "./types";

import * as Styled from "./CoinManager.styled";
import { CoinCardDataItems } from "../../components/coin-card/types";

const CoinManager: React.FC<CoinManagerProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [budgetData, setBudgetData] = useState<CoinCardDataItems[]>([]);

  const handleStorageData = () => {
    const newData = JSON.parse(localStorage.getItem("addedCoins") || "[]");
    setBudgetData(newData);
  };

  useEffect(() => {
    handleStorageData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleStorageData();
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  const fetchCoins = async () => {
    const response = await getCoins();
    return response.data;
  };

  const { data: queriedCoinData } = useQuery<ICoinsResponse[]>(
    "coins",
    fetchCoins,
    {
      refetchInterval: 300000,
    }
  );
  return (
    <Styled.CoinManagerContainer>
      <Modals isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <Tables data={queriedCoinData} withSearchBar={true} />
      </Modals>
      <Buttons
        buttonType="float"
        title="Ekle"
        value={isModalOpen}
        setValue={setIsModalOpen}
      />

      <Styled.BudgetContainer>
        <Styled.Budget>
          <Heading
            title="Budget"
            description="You can add, delete and edit your coins."
            withRefresh={true}
          />
          <Styled.BudgetItems>
            <Styled.BudgetInfo>
              <span>Coins</span>
              <span>Average Price</span>
              <span>Count</span>
              <span></span>
            </Styled.BudgetInfo>
            {(budgetData.length > 0 &&
              budgetData?.map((item: CoinCardDataItems, index: number) => (
                <CoinCard key={index} data={item} />
              ))) || (
              <EmptySection state={isModalOpen} setState={setIsModalOpen} />
            )}
          </Styled.BudgetItems>
        </Styled.Budget>

        <Styled.BudgetChart>
          <PieChart data={budgetData} />
        </Styled.BudgetChart>
      </Styled.BudgetContainer>
    </Styled.CoinManagerContainer>
  );
};

export default CoinManager;
