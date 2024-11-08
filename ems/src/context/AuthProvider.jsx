import { createContext, useEffect, useState } from "react";
import { getLocalStorageData } from "../utils/LocalStorage";


export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const data = getLocalStorageData();
 setUser(data);
    }, []);

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
