import React from "react";
import { NextPage } from "next";
import SelectionSort from "../src/sortingAlgos/SelectionSort";
import NavBar from "../src/Layout/NavBar";

const selectionSort: NextPage = () => {
  return (
    <>
      <NavBar>
        <SelectionSort />
      </NavBar>
    </>
  );
};

export default selectionSort;
