import React, { useContext } from "react";
// import { useContext } from "react"; used later
import useMousePosition from "./UseMousePosition";
import { MouseContext } from "../../context/MouseContext";
const Cursor = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        // className={"ring"}
        className={`ring ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      >
        <p className="fw-bold"> View </p>
        <span className="read fw-bold"> Read </span>
      </div>
      <div
        className={`dot ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};
export default Cursor;
