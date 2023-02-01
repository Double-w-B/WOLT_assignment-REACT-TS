import React from "react";

interface Props {
  children: React.ReactNode;
}

export const AppContext = React.createContext<any>({});

export const AppProvider = ({ children }: Props) => {
  const [itemsTotal, setItemsTotal] = React.useState("");
  const [valueTotal, setValueTotal] = React.useState("");
  const [distanceTotal, setDistanceTotal] = React.useState("");
  const [totalFee, setTotalFee] = React.useState("");
  return (
    <AppContext.Provider
      value={{
        itemsTotal,
        setItemsTotal,
        valueTotal,
        setValueTotal,
        distanceTotal,
        setDistanceTotal,
        totalFee,
        setTotalFee,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
