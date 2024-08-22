"use client";
import { createContext, useContext, useState, useEffect } from "react";

export const cartContext = createContext();

export function AppProvider({ children }) {
  
  const [data, setData] = useState([]) 


  return (
    <cartContext.Provider value={{ data, setData }}>
      {children}
    </cartContext.Provider>
  );
}
