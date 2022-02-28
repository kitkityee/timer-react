import styled from "./Buttons.module.css";

const Button = (props) => {
  return (
    <div className={styled.container}>
      {props.state ? (
        <button className={styled.start} onClick={props.onStart}>
          Start
        </button>
      ) : (
        <button onClick={props.onStop}>Stop</button>
      )}
      <button onClick={props.onReset}>Reset</button>
    </div>
  );
};

export default Button;
