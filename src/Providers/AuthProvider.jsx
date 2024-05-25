import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../Hooks.jsx/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const axiosPublic = useAxiosPublic();


    // CreateUser email & password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google SignIn
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // SignOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // updateUserProfile
    const updateUserProfile = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    // Current User hold
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Current User', currentUser)
            if (currentUser) {
                // get token and store client side
                const userInfo = { email: currentUser.email };
                
                axiosPublic.post('/jwt', userInfo) 
                    .then(res => {
                        if (res.data.token) {
                        localStorage.setItem('access-token',res.data.token)
                    }
                })
            }
            else {
                // TODO: remove token (if token stored in the client side: Local Storage, caching, in memory)
            }
            setLoading(false)
        });
        return () => {
           return unsubscribe();
        }
    },[axiosPublic])
    
    const authInfo = {
        user,
        loading,
        createUser,
        googleSignIn,
        logIn,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;