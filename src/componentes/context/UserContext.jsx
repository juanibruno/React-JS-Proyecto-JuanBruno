
import { createContext, useState } from "react";


export const UserContext = createContext()


const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        email: null,
        logged: false,
        uid: null,

    })

    /* console.log(user); */
    const acceso = (values) => {

        setUser({
            email: values.email,
            uid: "asdf",
            logged: true
        })

    }

    return (
        <UserContext.Provider value={{ user, acceso }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;