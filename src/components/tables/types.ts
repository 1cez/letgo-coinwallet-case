import { ICoinsResponse } from "../../app/services/coin";

export interface TableProps {
  data: any;
  withSearchBar?: boolean;
}

export interface TableDataType {
  key: string;
  coinName: string;
  lastPrice: number | string;
  prevPrice: number | string;
  weightedAvgPrice: number | string;
  count?: number;
}
