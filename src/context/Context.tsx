import React from "react";

interface Props {
  children: React.ReactNode;
}

export const AppContext = React.createContext<any>({});

export const AppProvider = ({ children }: Props) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppProvider;
