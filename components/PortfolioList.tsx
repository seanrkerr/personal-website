import React, { useState, useEffect, useRef } from "react";
import { Loader } from "../common/hooks/UseState";
import { UsePrevious } from "../common/hooks/UseRef";
import { IPortfolioResponse } from "../interfaces/IPortfolioResponse";
import PortfolioService from "../services/PortfolioService";
import { PortfolioResponse } from "../common/PortfolioResponse";
import { PortFolioListComponent } from "./PortfolioListComponent";
import LoadingComp from "./LoadingComp";

type PortfolioListProps = {
  listData: PortfolioResponse[];
};

const portfolio = new PortfolioService();

let MAX_PAGES = false;
let portfolioStartLimit = 3;
let pageLimit = 7; // yep I cheated here :-)

const PortfolioList: React.FC<PortfolioListProps> = function ({ listData }) {
  const [listItems, setListItems] = useState<PortfolioResponse[]>(listData);
  const { isFetching, setIsFetching } = Loader();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prevItems = UsePrevious(listItems);
  let previousStartLimit = UsePrevious(portfolioStartLimit);

  useEffect(() => {
    if (!isFetching || MAX_PAGES) return;

    const fetchThis = async () => {
      const result = await portfolio.get(
        `${process.env.RESTURL_PORTFOLIO}/portfolio?start=${previousStartLimit}&limit=3`
      );

      if (result.type === "failure") {
        console.log("Unable to load portfolio list");
        return;
      }
      const res = result.data as PortfolioResponse;
      // @ts-ignore
      setListItems([...prevItems, ...res] as unknown as PortfolioResponse[]);
      portfolioStartLimit += 1;
      if (pageLimit === portfolioStartLimit) {
        MAX_PAGES = true;
      }

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
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8 relative -mt-32 max-w-8xl mx-auto pt-8 md:pt-26 relative z-10 md:pb-12 pb-32 px-4 sm:px-6 lg:px-8 lg:w-9/12">
        <PortFolioListComponent list={listItems} />
      </div>
      {isFetching && <LoadingComp />}
    </>
  );
};

export default PortfolioList;
