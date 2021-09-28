import Image from "next/image";
import React, { useState, useEffect } from "react";
import { GetInitialState, Loader } from "../common/hooks/UseState";

const PortfolioList: React.FC = function () {
  const { listItems, setListItems } = GetInitialState(0, 2);

  const { isFetching, setIsFetching } = Loader();

  // WIP =====>

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // useEffect(() => {
  //   if (!isFetching) return;
  //   const fetchMoreListItems = () => {
  //     setTimeout(() => {
  //       setListItems((prevState) => [
  //         ...prevState,
  //         ...Array.from(listItems, (n) => n + prevState.length + 1),
  //       ]);
  //       setIsFetching(false);
  //     }, 2000);
  //   };
  //   fetchMoreListItems();
  // }, [isFetching]);

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //     document.documentElement.offsetHeight
  //   )
  //     return;
  //   setIsFetching(true);
  // };

  return (
    <>
      <ul className="list-group mb-2">
        {listItems.map((listItem, n) => (
          <li key={n} className="list-group-item">
            List Item {listItem}
          </li>
        ))}
      </ul>
      {isFetching && "Fetching more list items..."}
    </>
  );
};

export default PortfolioList;
