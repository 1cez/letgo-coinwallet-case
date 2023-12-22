import axios, { AxiosResponse } from "axios";

export const getCoins = async (): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(
      `https://api2.binance.com/api/v3/ticker/24hr`
    );

    return response;
  } catch (error) {
    throw error;
  }
};
