import { createContext, useEffect, useState } from "react";
import { getLocalStorageData } from "../utils/LocalStorage";


export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const { employee, admin } = getLocalStorageData();
 setUser(employee  ||admin);
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
