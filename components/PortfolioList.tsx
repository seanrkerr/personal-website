import React, { useState, useEffect, useRef } from "react";
import configuration from "../common/configuration";
import { Loader } from "../common/hooks/UseState";
import { UsePrevious } from "../common/hooks/UseRef";
import { IPortfolioResponse } from "../interfaces/IPortfolioResponse";
import PortfolioService from "../services/PortfolioService";
import { PortfolioResponse } from "../common/PortfolioResponse";
import { PortFolioListComponent } from "./PortfolioListComponent";

type PortfolioListProps = {
  listData: PortfolioResponse[];
};

const portfolio = new PortfolioService();
let MAX_PAGES = false;

const PortfolioList: React.FC<PortfolioListProps> = function ({ listData }) {
  const [listItems, setListItems] = useState<PortfolioResponse[]>(listData);
  const { isFetching, setIsFetching } = Loader();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prevItems = UsePrevious(listItems);

  useEffect(() => {
    if (!isFetching || MAX_PAGES) return;

    const fetchThis = async () => {
      const result = await portfolio.get(
        `${process.env.RESTURL_PORTFOLIO}/portfolio?start=3&limit=3`
      );

      if (result.type === "failure") {
        console.log("Unable to load portfolio list");
        return;
      }
      const res = result.data as PortfolioResponse;
      // @ts-ignore
      setListItems([...prevItems, ...res] as unknown as PortfolioResponse[]);

      MAX_PAGES = true;
      setIsFetching(false);
    };
    setTimeout(() => {
      fetchThis();
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      MAX_PAGES
    )
      return;
    setIsFetching(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
        <PortFolioListComponent list={listItems} />
      </div>
      {isFetching && "Fetching more list items..."}
    </>
  );
};

export default PortfolioList;
