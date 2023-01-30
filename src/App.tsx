import React from "react";
import * as Component from "./components";
import AppProvider from "./context/Context";
import "./style/App.css";
import "./style/normalize.css";

const App: React.FC = () => {
  return (
    <main>
      <AppProvider>
        <Component.CartItems />
        <Component.CartValue />
        <Component.DeliveryDistance />
        <Component.Total />
      </AppProvider>
    </main>
  );
};

export default App;
