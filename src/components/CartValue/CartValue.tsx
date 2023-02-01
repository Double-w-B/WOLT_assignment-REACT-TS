import React from "react";
import * as Styled from "./CartValue.style";
import { TiPlus, TiMinus } from "react-icons/ti";

const CartValue: React.FC = () => {
  return (
    <Styled.CartValue>
      <div className="value">
        <button>
          <TiMinus />
        </button>
        <input type="text" />
        <button>
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
