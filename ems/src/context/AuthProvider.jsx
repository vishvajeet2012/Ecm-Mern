import { createContext, useEffect, useState } from "react";
import { getLocalStorageData, setLocalStorage } from "../utils/LocalStorage";


export const AuthContext = createContext();

function AuthProvider({ children }) {

               // localStorage.clear()
    const [user, setUser] = useState(null);

    useEffect(() => {
        setLocalStorage()
        const {admin,employee} = getLocalStorageData();
              setUser(employee);
   

                }, []);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
