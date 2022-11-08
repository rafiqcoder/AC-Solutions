import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import React,{ createContext,useEffect,useState } from 'react';
import { app } from '../firebase/firebase.config';

export const DataContext = createContext();
export const UserContext = createContext();

const Context = ({ children }) => {
    const [refresh,setRefresh] = useState(false);
    const [services,setServices] = useState([]);
    const [user,setUser] = useState([]);
    const [loader,setLoader] = useState(true);

    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider();

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.log(error))
    },[refresh]);

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
                setUser({});
            }
            setLoader(false);
        })
        return () => unsubscribe();
    },[auth])

    console.log(user);


    const dataInfo = { services,refresh,setRefresh }
    const userInfo = { googleLogin,user,LogOut }
    return (
        <UserContext.Provider value={userInfo}>

            <DataContext.Provider value={dataInfo}>
                {children}
            </DataContext.Provider>
        </UserContext.Provider>
    );
};

export default Context;