import { ICoinsResponse } from "../../app/services/coin";

export interface CoinCardProps {
  data: CoinCardDataItems;
}

export interface CoinCardDataItems extends ICoinsResponse {
  coinName?: string;
}
