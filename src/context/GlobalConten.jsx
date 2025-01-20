import { createContext, useState, useContext } from "react";

// Crea un context per lo stato globale
const GlobalContext = createContext();

// Stati iniziali per il context
const initialState = {
  searchQuery: "",
  isLoading: false,
  error: null,
  dataFromApi: [],
  selectValue: "",
  setSelectValue: () => {},
  setDataFromApi: () => {},
  setSearchQuery: () => {},
  setIsLoading: () => {},
  setError: () => {},
};

// Componente GlobalContext per fornire lo stato ai figli
export function GlobalContextProvider({ children }) {

  // Imposto gli stati globali con un valore di default
  const [searchQuery, setSearchQuery] = useState(initialState.searchQuery);
  const [isLoading, setIsLoading] = useState(initialState.isLoading);
  const [error, setError] = useState(initialState.error);
  const [dataFromApi, setDataFromApi] = useState(initialState.dataFromApi);
  const [selectValue, setSelectValue] = useState(initialState.selectValue);

  // Oggetto disponibile per il context
  const objContext = {
    searchQuery,
    isLoading,
    error,
    dataFromApi,
    selectValue,
    setSelectValue,
    setDataFromApi,
    setSearchQuery,
    setIsLoading,
    setError,
  };

  return (
    <GlobalContext.Provider value={objContext}>
      {children}
    </GlobalContext.Provider>
  );
}

// Funzione per utilizzare il context
export function useGlobalContext() {
  const objFromContext = useContext(GlobalContext);
  return objFromContext;
}
