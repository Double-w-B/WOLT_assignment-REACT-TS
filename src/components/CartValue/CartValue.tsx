import React from "react";
import * as Styled from "./CartValue.style";
import { TiPlus, TiMinus } from "react-icons/ti";
import { AppContext } from "../../context/Context";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const CartValue: React.FC = () => {
  const { cartValue, setCartValue } = React.useContext(AppContext);

  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const isValue = +cartValue > 0;
  const regExp = /^\d*(\.\d{0,2})?$/;

  React.useEffect(() => {
    if (+cartValue === 0) stopCounter();
    if (+cartValue < 0) {
      stopCounter();
      setCartValue("0");
    }
    // eslint-disable-next-line
  }, [cartValue]);

  function handleInputChange(e: InputEvent) {
    if (e.target.value === "") return setCartValue("0");

    if (!e.target.value.match(regExp)) return;

    setCartValue(e.target.value);
  }

  function handlePlusButton() {
    setCartValue((+cartValue + 1).toString());
  }

  function handleMinusButton() {
    if (+cartValue > 0) setCartValue((+cartValue - 1).toString());
  }

  const startCounter = (button: string) => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      if (button === "plus") {
        return setCartValue((prevValue: string) => (+prevValue + 1).toString());
      }
      if (+cartValue > 1) {
        setCartValue((prevValue: string) => (+prevValue - 1).toString());
      } else {
        setCartValue("0");
      }
    }, 150);
  };

  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <Styled.CartValue isValue={isValue}>
      <div className="value">
        <button
          onClick={handleMinusButton}
          onMouseDown={() => startCounter("minus")}
          onMouseUp={stopCounter}
          onMouseLeave={stopCounter}
        >
          <TiMinus />
        </button>
        <input
          type="string"
          value={Number(cartValue).toFixed(2)}
          onChange={handleInputChange}
        />
        <button
          onClick={handlePlusButton}
          onMouseDown={() => startCounter("plus")}
          onMouseUp={stopCounter}
          onMouseLeave={stopCounter}
        >
          <TiPlus />
        </button>
      </div>
      <p>
        <span>&euro;</span>
        Cart Value:
      </p>
    </Styled.CartValue>
  );
};

export default CartValue;
