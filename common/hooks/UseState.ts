import React, { useState, useEffect } from "react";

const GetInitialState = (start: number, end: number) => {
  const [listItems, setListItems] = useState(
    Array.from(Array(30).keys(), (n) => n + 1)
  );

  return listItems;
};

export default GetInitialState;
