// create a context (warehouse)
// provider 
// consumer / useContext hook
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = "https://create-api-gamma.vercel.app/service";

// const API = "create-api-gamma.vercel.app";


const initialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // keep updater functions *inside* the provider
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Khan Technical",
        image: "./img/about1.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE", // ✅ different type
      payload: {
        name: "Mazhar Technical",
        image: "./img/hero.svg",
      },
    });
  };

  // to get the api data 

  const getServices = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        dispatch({ type: "GET_SERVICES", payload: data});
    } catch (error) {
        console.log(error);
    }
  };

  // to call the api

  useEffect(() => {
    getServices(API);
  }, [])


  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppProvider, useGlobalContext };
 