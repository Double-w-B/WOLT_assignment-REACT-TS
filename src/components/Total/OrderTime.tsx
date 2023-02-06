import React from "react";
import * as Styled from "./OrderTime.style";
import { Dispatch, SetStateAction } from "react";

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type Props = {
  setTime: Dispatch<SetStateAction<string>>;
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
  time: string;
};

const OrderTime: React.FC<Props> = (props: Props) => {
  return (
    <Styled.OrderTime>
      <input
        type="date"
        value={props.date}
        onChange={(e: InputEvent) => props.setDate(e.target.value)}
      />
      <input
        type="time"
        pattern="([01]?[0-9]{1}|2[0-3]{1}):[0-5]{1}[0-9]{1}"
        value={props.time}
        onChange={(e: InputEvent) => props.setTime(e.target.value)}
      />
    </Styled.OrderTime>
  );
};

export default OrderTime;
