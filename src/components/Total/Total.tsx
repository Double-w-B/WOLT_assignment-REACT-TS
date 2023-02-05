import React from "react";
import * as Styled from "./Total.style";
import { AppContext } from "../../context/Context";

const Total: React.FC = () => {
  const { cartValue, cartItems, distance, clearValues } =
    React.useContext(AppContext);
  const [totalFee, setTotalFee] = React.useState("");
  const [isReady, setIsReady] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  React.useEffect(() => {
    setTotalFee("");

    if (cartItems > 0 && +cartValue > 0 && +distance > 0 && !isReady) {
      setIsReady(true);
    }

    if (isReady && (cartItems === 0 || +cartValue === 0 || +distance === 0)) {
      setIsReady(false);
    }

    // eslint-disable-next-line
  }, [cartValue, cartItems, distance]);

  React.useEffect(() => {
    if (errorMsg) {
      const timer = setTimeout(() => {
        setErrorMsg("");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [errorMsg]);

  function checkFridayRush() {
    const currentDay = new Date().toLocaleString("en-En", {
      weekday: "long",
    });
    const currentHour = new Date()
      .toLocaleString("en-En", {
        hour: "numeric",
        timeZone: "UTC",
      })
      .split(" ")[0];

    const isFriday = currentDay === "Friday";
    const isRushTime = +currentHour >= 3 && +currentHour <= 7;
    const isFridayRush = isFriday && isRushTime;

    return isFridayRush;
  }

  function calculateFee() {
    let cartValueSurcharge = 0;
    let extraItemsSurcharge = 0;
    let freeSurchargeNumOfItems = 4;
    let deliveryFee = 0;
    const fridayRush = checkFridayRush();
    let total: number;

    if (cartItems === 0 || +cartValue === 0 || +distance === 0) {
      return setErrorMsg("Please provide values");
    }

    if (+cartValue < 10) cartValueSurcharge = 10 - Number(cartValue);

    if (cartItems >= 5) {
      extraItemsSurcharge = (cartItems - freeSurchargeNumOfItems) * 0.5;
    }

    if (cartItems > 12) {
      extraItemsSurcharge = extraItemsSurcharge + 1.2;
    }

    if (distance <= 1000) {
      deliveryFee = 2;
    } else {
      deliveryFee = Math.ceil((distance - 1000) / 500) * 1 + 2;
    }

    total = cartValueSurcharge + extraItemsSurcharge + deliveryFee;

    if (fridayRush) total = total * 1.2;
    if (total > 15) total = 15;
    if (+cartValue >= 100) total = 0;

    setTotalFee(
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(total)
    );
  }

  function handleResetButton() {
    setTotalFee("");
    setIsReady(false);
    clearValues();
  }

  function handleCalculateButton() {
    calculateFee();
    setIsReady(false);
  }

  return (
    <Styled.TotalSection>
      <Styled.TotalResult>
        <p>Total fee payment</p>
        <div className="value">
          <p>{totalFee}</p>
          <div className="underline"></div>
        </div>
      </Styled.TotalResult>
      <Styled.TotalButtons isReady={isReady}>
        <button onClick={handleResetButton}>reset</button>
        <button onClick={handleCalculateButton}>calculate</button>
      </Styled.TotalButtons>
      {errorMsg && <p className="error">{errorMsg}</p>}
    </Styled.TotalSection>
  );
};

export default Total;
