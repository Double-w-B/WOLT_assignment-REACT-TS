import React from "react";
import { RiRouteLine } from "react-icons/ri";
import * as Styled from "./DeliveryDistance.style";
import { AppContext } from "../../context/Context";

const DeliveryDistance: React.FC = () => {
  const { distance, setDistance } = React.useContext(AppContext);

  const isValue = +distance > 0;
  const extraSpaceRegExp = /(?!^)(?=(?:\d{3})+(?:\.|$))/gm;

  return (
    <Styled.DeliveryDistance isValue={isValue}>
      <div className="value">
        <label htmlFor="distance">
          {distance.toString().replace(extraSpaceRegExp, " ")} m
        </label>

        <input
          type="range"
          id="distance"
          min="0"
          max="20000"
          value={distance}
          onChange={(e) => setDistance(+e.target.value)}
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
