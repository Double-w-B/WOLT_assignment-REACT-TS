import React from "react";
import { RiRouteLine } from "react-icons/ri";
import * as Styled from "./DeliveryDistance.style";

const DeliveryDistance: React.FC = () => {
  const [value, setValue] = React.useState("0");
  const isValue = +value > 0;

  return (
    <Styled.DeliveryDistance isValue={isValue}>
      <div className="value">
        <label htmlFor="distance">
          {value.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, " ")} m
        </label>
        <input
          type="range"
          id="distance"
          min="0"
          max="20000"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <p>
        <span>
          <RiRouteLine />
        </span>
        Distance:
      </p>
    </Styled.DeliveryDistance>
  );
};

export default DeliveryDistance;
