import React, { useRef } from "react";
import { useDispatch } from "react-redux";

export default function Controls() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncreament = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const handleDecreament = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const handleAddition = () => {
    dispatch({
      type: "ADDITION",
      payload: inputElement.current.value,
    });
    inputElement.current.value = "";
  };

  const handleSubstraction = () => {
    dispatch({
      type: "SUBSTRACTION",
      payload: inputElement.current.value,
    });
    inputElement.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch({
      type: "TOGGLE",
    });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncreament}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleDecreament}
        >
          Decrement
        </button>
        <button
          type="button"
          className="btn btn-info btn-lg px-4 gap-3 "
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div
        className="d-grid gap-2 d-sm-flex justify-content-sm-center"
        style={{ marginTop: "20px" }}
      >
        <input type="number" ref={inputElement} />
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleAddition}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleSubstraction}
        >
          Sub
        </button>
      </div>
    </>
  );
}
