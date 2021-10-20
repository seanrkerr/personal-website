import React, { useState, useEffect } from "react";
import { Result } from "../Result";
import { PortfolioResponse } from "../PortfolioResponse";
import { IPortfolioResponse } from "../../interfaces/IPortfolioResponse";
import PortfolioService from "../../services/PortfolioService";

export const Loader = () => {
  const [isFetching, setIsFetching] = useState(false);

  return { isFetching, setIsFetching };
};
