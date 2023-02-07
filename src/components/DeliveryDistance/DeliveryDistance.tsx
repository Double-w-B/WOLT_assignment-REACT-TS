import React from "react";
import { RiRouteLine } from "react-icons/ri";
import * as Styled from "./DeliveryDistance.style";
import { AppContext } from "../../context/Context";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const DeliveryDistance: React.FC = () => {
  const { distance, setDistance } = React.useContext(AppContext);

  const isValue = +distance > 0;

  function handleInputChange(e: InputEvent) {
    if (e.target.value === "") return setDistance("0");
    if (isNaN(+e.target.value)) return;
    if (+e.target.value > 20000) return setDistance("20000");
    setDistance(+e.target.value);
  }

  return (
    <Styled.DeliveryDistance isValue={isValue}>
      <div className="value">
        <div>
          <input type="text" value={distance} onChange={handleInputChange} />
          <p>m</p>
        </div>

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
