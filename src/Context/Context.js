import React,{ createContext,useEffect,useState } from 'react';
import { app } from '../firebase/firebase.config';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export const DataContext = createContext();
export const UserContext = createContext();

const Context = ({ children }) => {
    const [refresh,setRefresh] = useState(false);

    const [user,setUser] = useState([]);
    const [ loader, setLoader ] = useState(true);

    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider();


    /// logout
    const LogOut = () => {
        return auth.signOut()
    }

    const googleLogin = () => {
        return signInWithPopup(auth,GoogleProvider)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            } else {
                setUser([]);
            }
            setLoader(false);
        })
        return ()=> unsubscribe();
    },[auth])

    console.log(user);


    const dataInfo = { refresh,setRefresh }
    const userInfo = { googleLogin,user,LogOut }
    return (
        <UserContext.Provider value ={userInfo}>
            
        <DataContext.Provider value={dataInfo}>
            {children}
        </DataContext.Provider>
        </UserContext.Provider>
    );
};

export default Context;