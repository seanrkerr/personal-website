import React, { useState, useEffect } from "react";

export const GetInitialState = (start: number, end: number) => {
  const [listItems, setListItems] = useState(
    Array.from(Array(30).keys(), (n) => n + 1)
  );

  return { listItems, setListItems };
};

export const Loader = () => {
  const [isFetching, setIsFetching] = useState(false);

  return { isFetching, setIsFetching };
};
