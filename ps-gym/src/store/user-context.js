import React, {useState, createContext} from "react";

export const UserContext = createContext();

function UserContextProvider({children}) {

    const [user, setUser] = useState({
        _id: 0,
        name: "",
        lastName: "",
        email: "",
        number_tel: 0,
        isAdmin: false,
        picture: "",
        token: ""
    })

    /*useEffect(() => {
        if (localStorage.getItem("token")) {
            fetch("http://localhost:5000/CurrentUser", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                }
            })
                .then(res => res.json())
                .then(res => console.log("res", res))
            .then((data) => {
                let user = {
                    name: data.name,
                    lastName: data.lastName,
                    email: data.email,
                    number_tel: data.number_tel,
                    isAdmin: data.isAdmin,
                    picture: data.picture,
                    token: localStorage.getItem("token")
                }
                setUser(() => user)
            });
        } else {
            const path = "/";
            navigate(path)
        }
    }, [navigate])*/

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;

