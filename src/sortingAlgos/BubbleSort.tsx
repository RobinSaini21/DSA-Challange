import React from "react";
import { useState, useEffect } from "react";

function BubbleSort() {
  const [ele, setEle] = useState<string>("");
  const [elements, setElements] = useState<number[]>([]);
  const [sottedelements, setSortedElements] = useState<number[]>([]);
  const bubbleSort = (arr: number[]) => {
    let i, j, temp;
    for (i = 0; i < arr.length; i++) {
      for (j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setTimeout(() => {
            setSortedElements(arr);
          }, 1000);
        }
      }
    }
  };

  const handleBubbles = () => {
    bubbleSort(elements);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEle(e.target.value);
  };
  const handleClick = () => {
    const num: number = parseInt(ele);
    const elements_ = [...elements, num];
    setElements(elements_);
    setEle("");
  };
  const arrJSON = JSON.stringify(elements);
  console.log(arrJSON);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-6  d-flex justify-content-center">
              <input value={ele} onChange={handleChange} type="number" />
              <button onClick={handleClick}>CLICK</button>
              <button onClick={handleBubbles}>CLICK TO SORT</button>
            </div>
            <div className="col-6  d-flex justify-content-center">
              <p> {elements.length === 0 ? null : arrJSON}</p>
            </div>
          </div>
          <div className="col-md">
            <div
              className="d-flex justify-content-center"
              style={{
                transform: `${
                  elements.length === 0 ? "rotate(0)" : "rotate(180deg)"
                }`,
              }}
            >
              {elements.length === 0 ? (
                <span>Nothing To Sort</span>
              ) : (
                <>
                  {sottedelements.length === 0 ? (
                    <>
                      {elements.map((data, idx) => (
                        <div
                          className="mx-4 my-5"
                          style={{
                            width: "60px",
                            background: "blue",
                            height: `${data}vh`,
                            transform: "rotate(180deg)",
                            color: "red",
                          }}
                        >
                          {data}
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      {sottedelements.map((data, idx) => (
                        <div
                          className="mx-4 my-5"
                          style={{
                            width: "60px",
                            background: "blue",
                            height: `${data}vh`,
                            transform: "rotate(180deg)",
                            color: "red",
                          }}
                        >
                          {data}
                        </div>
                      ))}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BubbleSort;
