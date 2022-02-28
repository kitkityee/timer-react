import { useState } from "react";
import Buttons from "./Buttons";
import styled from "./Timer.module.css";

const SecondTest = () => {
  const [counter, setCounter] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [timeOut, setTimeOut2] = useState(null);
  const [timeOutSec, setTimeOutSec] = useState(null);
  const [button, setButton] = useState(true);
  const [secCounter, setSecCounter] = useState(0);
  const [minCounter, setMinCounter] = useState(0);

  function msCount() {
    setCounter((prevCounter) => prevCounter + 1);
    setTimeOut2(setTimeout(msCount, 10));
  }

  function secCount() {
    setSecCounter((prevCounter) => prevCounter + 1);
    setTimeOutSec(setTimeout(secCount, 1000));
  }

  function startCount() {
    if (!timerOn) {
      msCount();
      secCount();
      setTimerOn(true);
    }
    setButton(false);
  }

  function stopCount() {
    setTimerOn(false);
    clearTimeout(timeOut);
    clearTimeout(timeOutSec);
    setButton(true);
  }

  const resetCount = () => {
    setTimerOn(false);
    clearTimeout(timeOut);
    clearTimeout(timeOutSec);
    setSecCounter(0);
    setMinCounter(0);
    setCounter(0);
    setButton(true);
  };

  if (counter > 99) {
    setCounter(0);
  }

  if (secCounter === 60) {
    setSecCounter(0);
    setMinCounter((prevCounter) => prevCounter + 1);
  }

  const ifShow0 = (counter) => {
    if (counter < 10) {
      return `0${counter}`;
    } else {
      return counter;
    }
  };

  return (
    <div>
      <div className={styled.time}>
        <p type="number">
          {`${ifShow0(minCounter)}:${ifShow0(secCounter)}:${ifShow0(counter)}`}
        </p>
      </div>
      <Buttons
        onReset={resetCount}
        onStart={startCount}
        onStop={stopCount}
        state={button}
      ></Buttons>
    </div>
  );
};

export default SecondTest;
