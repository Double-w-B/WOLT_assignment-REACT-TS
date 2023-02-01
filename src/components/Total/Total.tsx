import React from "react";
import * as Styled from "./Total.style";

const Total: React.FC = () => {
  return (
    <Styled.TotalSection>
      <Styled.TotalResult>
        <p>Total fee payment</p>
        <p>100 &euro;</p>
      </Styled.TotalResult>
      <Styled.TotalButtons>
        <button>reset</button>
        <button>calculate</button>
      </Styled.TotalButtons>
    </Styled.TotalSection>
  );
};

export default Total;
