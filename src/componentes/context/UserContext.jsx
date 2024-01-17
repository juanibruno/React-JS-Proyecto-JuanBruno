
import { createContext, useState } from "react";


export const UserContext = createContext()


const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        email: null,
        logged: true,
        uid: null,

    })

    return (
        <UserContext.Provider value={ {user} }>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;