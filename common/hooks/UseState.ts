import React, { useState, useEffect } from "react";
import { Result } from "../Result";
import configuration from "../../common/configuration";
import { PortfolioResponse } from "../PortfolioResponse";
import { IPortfolioResponse } from "../../interfaces/IPortfolioResponse";
import PortfolioService from "../../services/PortfolioService";

export const useFetch = (start: number, end: number) => {
  console.log("start", start);
  console.log("end", end);
  const initial_data = [{}] as unknown as PortfolioResponse[];
  const portfolio = new PortfolioService();
  const [listItems, setListItems] = useState<PortfolioResponse[]>(initial_data);

  useEffect(() => {
    async function getPortfolioList() {
      const result = await portfolio.get(
        `${configuration.api}/portfolio?start=${start}&limit=${end}`
      );
      if (result.type === "failure") {
        console.log("Unable to load portfolio list");
        return;
      }

      const res = result.data as PortfolioResponse;
      setListItems([...res] as unknown as PortfolioResponse[]);
    }

    getPortfolioList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [listItems, setListItems];
};

export const GetInitialState = (start: number, end: number) => {
  const [listItems, setListItems] = useFetch(start, end);

  return { listItems, setListItems };
};

export const Loader = () => {
  const [isFetching, setIsFetching] = useState(false);

  return { isFetching, setIsFetching };
};
