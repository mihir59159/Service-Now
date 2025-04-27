import { createContext, useEffect, useState } from "react";

export const userContext = createContext(); // <-- () is important!

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user"))||null);
  const [cartItems, setCartItem] = useState(()=>{
    const data = JSON.parse(localStorage.getItem("cartItems"));
    return data ? data : [];
  }); // for future service data
  console.log("services", cartItems);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <userContext.Provider value={{ user, setUser, cartItems, setCartItem }}>
      {children}
    </userContext.Provider>
  );
};
