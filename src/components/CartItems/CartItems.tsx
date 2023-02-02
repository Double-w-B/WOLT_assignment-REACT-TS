import React from "react";
import * as Styled from "./CartItems.style";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TiPlus, TiMinus } from "react-icons/ti";
import { AppContext } from "../../context/Context";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const CartItems: React.FC = () => {
  const { cartItems, setCartItems } = React.useContext(AppContext);

  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const isValue = cartItems > 0;

  React.useEffect(() => {
    if (+cartItems === 0) stopCounter();

    // eslint-disable-next-line
  }, [cartItems]);

  function handleInputChange(e: InputEvent) {
    if (isNaN(+e.target.value)) return;
    setCartItems(+e.target.value);
  }

  function handlePlusButton() {
    setCartItems(+cartItems + 1);
  }

  function handleMinusButton() {
    if (+cartItems > 0) setCartItems(+cartItems - 1);
  }

  const startCounter = (button: string) => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      if (button === "plus") {
        return setCartItems((prevValue: number) => prevValue + 1);
      }
      if (+cartItems > 0) {
        setCartItems((prevValue: number) => prevValue - 1);
      }
    }, 200);
  };

  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <Styled.CartItems isValue={isValue}>
      <div className="value">
        <button
          onClick={handleMinusButton}
          onMouseDown={() => startCounter("minus")}
          onMouseUp={stopCounter}
          onMouseLeave={stopCounter}
        >
          <TiMinus />
        </button>
        <input type="text" value={+cartItems} onChange={handleInputChange} />
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
        <span>
          <HiOutlineShoppingBag />
        </span>
        Cart Items:
      </p>
    </Styled.CartItems>
  );
};

export default CartItems;
