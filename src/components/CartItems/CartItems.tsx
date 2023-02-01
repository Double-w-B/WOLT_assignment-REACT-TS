import React from "react";
import * as Styled from "./CartItems.style";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TiPlus, TiMinus } from "react-icons/ti";

const CartItems: React.FC = () => {
  return (
    <Styled.CartItems>
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
        <span>
          <HiOutlineShoppingBag />
        </span>
        Cart Items:
      </p>
    </Styled.CartItems>
  );
};

export default CartItems;
