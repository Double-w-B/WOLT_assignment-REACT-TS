import React from "react";

interface Props {
  children: React.ReactNode;
}

export const AppContext = React.createContext<any>({});

export const AppProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = React.useState(0);
  const [cartValue, setCartValue] = React.useState("0");
  const [distance, setDistance] = React.useState("0");

  function clearValues() {
    setCartItems(0);
    setCartValue("0");
    setDistance("0");
  }

  return (
    <AppContext.Provider
      value={{
        cartValue,
        setCartValue,
        cartItems,
        setCartItems,
        distance,
        setDistance,
        clearValues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
