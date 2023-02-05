import React, { Fragment } from "react";
import * as Component from "./components";
import AppProvider from "./context/Context";
import "./style/App.css";
import * as Styled from "./App.style";

const App: React.FC = () => {
  return (
    <Fragment>
      <main>
        <Styled.Title>Easy steps to count Wolt delivery fee</Styled.Title>
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
