import Image from "next/image";
import React, { useState, useEffect } from "react";
import GetInitialState from "../common/hooks/UseState";

const PortfolioList: React.FC = function () {
  console.log("listItems", GetInitialState(0, 2));

  return (
    <>
      <p>this is a test</p>
    </>
  );
};

export default PortfolioList;
