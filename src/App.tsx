import React, { Fragment } from "react";
import * as Component from "./components";
import AppProvider from "./context/Context";
import "./style/App.css";
import * as Styled from "./App.style";

const App: React.FC = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function checkWidowWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", checkWidowWidth);
    return () => window.removeEventListener("resize", checkWidowWidth);
  });

  return (
    <Fragment>
      <main>
        <Styled.Title>
          {windowWidth > 768
            ? "Easy steps to count Wolt delivery fee"
            : "Wolt delivery fee calculator"}
        </Styled.Title>
        <AppProvider>
          <Styled.ValuesSection>
            <Component.CartItems />
            <Component.CartValue />
            <Component.DeliveryDistance />
          </Styled.ValuesSection>
          <Component.Total />
        </AppProvider>
      </main>
      <Component.Footer />
    </Fragment>
  );
};

export default App;
