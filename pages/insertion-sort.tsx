import React from "react";
import { NextPage } from "next";
import NavBar from "../src/Layout/NavBar";
import InsertionSort from "../src/sortingAlgos/InertionSort";

const insertionSort: NextPage = () => {
  return (
    <>
      <NavBar>
        <InsertionSort />
      </NavBar>
    </>
  );
};

export default insertionSort;
