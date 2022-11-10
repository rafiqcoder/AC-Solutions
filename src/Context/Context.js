import { createUserWithEmailAndPassword,getAuth,GoogleAuthProvider,signInWithEmailAndPassword,signInWithPopup,updateProfile } from "firebase/auth";
import React,{ createContext,useEffect,useState } from 'react';
import { app } from '../firebase/firebase.config';


export const DataContext = createContext();
export const UserContext = createContext();

const Context = ({ children }) => {
    // Auth States
    const [loader,setLoader] = useState(true);
    const [initialName,setinitialName] = useState('');
    const [initialPhoto,setinitialPhoto] = useState('');
    const auth = getAuth(app);
    const [user,setUser] = useState([]);
    // Data States
    const [refresh,setRefresh] = useState(false);
    const [services,setServices] = useState([]);
    const [dataLoader,setDataLoader] = useState(true);
    const [datas,setDatas] = useState([]);

    //google provider
    const GoogleProvider = new GoogleAuthProvider();

    // fetching services data
    useEffect(() => {

        fetch('https://acsolutions-server-n403euqde-rafiqcoder.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                //stoping spinner when getting data
                setDataLoader(false)
                //setting data to state
                setServices(data)
            }
            )
            .catch(error => {

                console.log(error)
            }
            )
    },[refresh]);


    // seting services data to new data state to implement search
    //showing services from data state to services page
    useEffect(() => {
        setDatas(services);

    },[services]);


    // Login with email and password
    const loginWithPassword = (email,password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    // register with email and password
    const registerWithPassword = (email,password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // update user name and photo
    const updateNameAndPhoto = (name,img) => {
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: img
        })
    }

    /// logout
    const LogOut = () => {
        setLoader(true);
        return auth.signOut()
    }
    // login with google
    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth,GoogleProvider)
    }
    // setting user data to state
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {

            setUser(user);
            setLoader(false);


        })
        return () => unsubscribe();
    },[auth])



    //sending data info by data context
    const dataInfo = { services,refresh,setRefresh,datas,setDatas,dataLoader,setDataLoader }

    //sending user info by user context
    const userInfo = {
        googleLogin,
        loginWithPassword,
        updateNameAndPhoto,
        registerWithPassword,
        LogOut,
        setinitialName,
        setinitialPhoto,
        setLoader,
        initialPhoto,
        loader,
        user,
        initialName,
    }
    return (
        <UserContext.Provider value={userInfo}>
            <DataContext.Provider value={dataInfo}>
                {children}
            </DataContext.Provider>
        </UserContext.Provider>
    );
};

export default Context;