import React, { useState, useEffect, useRef, createContext} from "react";

const Context = createContext()

const Provider = ( { children } ) => {

  const [ domain, setDomain ] = useState("http://192.168.0.46:8000")
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)


  const globalContext = {
    domain,
    isLoggedIn,
    setIsLoggedIn
  }

  return <Context.Provider value={globalContext}>{children}</Context.Provider>

};

export { Context, Provider };