import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import {increase, decrease,setLastAction, INCREASE, DECREASE} from "../actions"

const Counter = () => {
  const dispatch = useDispatch()
  const {count,lastAction} = useSelector((state) => state);

const handleIncrease = () => {
  dispatch(increase())
  dispatch(setLastAction(INCREASE))
}
const handleDecrease = () => {
  dispatch(decrease())
  dispatch(setLastAction(DECREASE))
}

  return (

      <div>
          <h1>Count:{count}</h1>
          <button onClick={handleIncrease} > + </button>
          <button onClick={handleDecrease} > - </button>
          <p>Last Aciton:{lastAction}</p>
        </div>
  )
}

export default Counter;
