import React, { useState, createContext, useEffect } from "react";
//import {useNavigate} from "react-router-dom";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    _id: 0,
    name: "",
    lastName: "",
    email: "",
    number_tel: 0,
    isAdmin: false,
    picture: "",
    token: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("fetching current");
      fetch("http://localhost:5000/CurrentUser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          let user = {
            _id: data[0]._id,
            name: data[0].name,
            lastName: data[0].lastName,
            email: data[0].email,
            number_tel: data[0].number_tel,
            isAdmin: data[0].isAdmin,
            picture: data[0].picture,
            token: localStorage.getItem("token"),
          };
          setUser(() => user);
        });
    } else {
      //const path = "/";
      //navigate(path)
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
