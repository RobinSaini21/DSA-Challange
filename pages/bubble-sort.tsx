import React from "react";
import { NextPage } from "next";
import BubbleSort from "../src/sortingAlgos/BubbleSort";
import NavBar from "../src/Layout/NavBar";

const bubbleSort: NextPage = () => {
  return (
    <>
      <NavBar>
        <BubbleSort />
      </NavBar>
    </>
  );
};

export default bubbleSort;
