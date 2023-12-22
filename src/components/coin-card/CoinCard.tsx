import * as Styled from "./CoinCard.styled";

import { CoinCardDataItems, CoinCardProps } from "./types";

const CoinCard: React.FC<CoinCardProps> = ({ data }) => {
  const handleRemove = () => {
    const addedCoinsString = localStorage.getItem("addedCoins");
    if (addedCoinsString) {
      const addedCoins = JSON.parse(addedCoinsString);

      const indexToRemove = addedCoins.findIndex(
        (coin: CoinCardDataItems) => coin.coinName === data?.coinName
      );

      if (indexToRemove !== -1) {
        addedCoins.splice(indexToRemove, 1);

        localStorage.setItem("addedCoins", JSON.stringify(addedCoins));
      }
    }
  };

  return (
    <Styled.CoinCardContainer>
      <div>{data?.coinName}</div>
      <div>{data?.weightedAvgPrice}$</div>
      <div>{data?.count}</div>
      <div>
        <button onClick={handleRemove}>
          <i className="fa-solid fa-trash" />
        </button>
      </div>
    </Styled.CoinCardContainer>
  );
};

export default CoinCard;
