import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";

export const AuthContext = createContext(null);

// eslint-disable-next-line no-unused-vars, react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // All Providers
    const google = new GoogleAuthProvider();
    const facebook = new FacebookAuthProvider();

    // Create a password-based account
    function signUpUserWithEmailAndPassword(email, password) {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in a user with an email address and password
    function logInWithEmailAndPassword(email, password) {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Handle the sign-in flow with the Firebase SDK (Google)
    function googleSignIn() {
        setIsLoading(true);
        return signInWithPopup(auth, google);
    }

    // Handle the sign-in flow with the Firebase SDK (Google)
    function facebookSignIn() {
        setIsLoading(true);
        return signInWithPopup(auth, facebook);
    }

    // sign out a user
    function logOut() {
        setIsLoading(true)
        return signOut(auth);
    }

    // Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false)
        });
        return () => unsubscribe();
    }, []);


    const authentication = { user, isLoading, signUpUserWithEmailAndPassword, logInWithEmailAndPassword, googleSignIn, facebookSignIn, logOut }

    return <AuthContext.Provider value={authentication}>{children}</AuthContext.Provider>
};

export default AuthProvider;