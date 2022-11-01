import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const name = "Emma";
	return <AppContext.Provider value={{ name }}>{children}</AppContext.Provider>;
};

// Exporting custom hook as global context
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, AppContext };
