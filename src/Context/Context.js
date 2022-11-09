import { createUserWithEmailAndPassword, getAuth,GoogleAuthProvider,signInWithEmailAndPassword,signInWithPopup, updateProfile } from "firebase/auth";
import React,{ createContext,useEffect,useState } from 'react';
import { app } from '../firebase/firebase.config';

export const DataContext = createContext();
export const UserContext = createContext();

const Context = ({ children }) => {
    const [refresh,setRefresh] = useState(false);
    const [services,setServices] = useState([]);
    const [reviews,setReviews] = useState([]);
    const [user,setUser] = useState([]);
    const [loader,setLoader] = useState(true);
    const [initialName,setinitialName] = useState('');
    const [initialPhoto,setinitialPhoto] = useState('');

    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider();

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.log(error))
    },[refresh]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error))
    },[refresh,user]);
    
    const loginWithPassword = (email,password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const registerWithPassword = (email,password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
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

    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth,GoogleProvider)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
           
                setUser(user);
                setLoader(false);
          
            
        })
        return () => unsubscribe();
    },[auth])

    // console.log(user


    const dataInfo = { services,refresh,setRefresh,reviews }
    const userInfo = { googleLogin,user,LogOut,loader,setLoader,loginWithPassword,updateNameAndPhoto,registerWithPassword,initialPhoto,setinitialPhoto,initialName,setinitialName }
    return (
        <UserContext.Provider value={userInfo}>

            <DataContext.Provider value={dataInfo}>
                {children}
            </DataContext.Provider>
        </UserContext.Provider>
    );
};

export default Context;