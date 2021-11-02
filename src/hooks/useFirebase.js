import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,
onAuthStateChanged, GithubAuthProvider, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = ()  => {
    const [user, setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const [error,seterror] = useState(''); 
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // const signInUsinggoogle = () => {
    //     setIsLoading(true);
    //     signInWithPopup(auth, googleProvider)
    //     .then(result => {
    //         console.log(result.user);
    //         setUser(result.user);
    //     })
    //     .finally(()=> setIsLoading(false));

        const signInUsinggoogle = () => {
            signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(err => {
                seterror(error.message);
            })
    
        }
    
        

    
      const signInUsingGithub = () => {
          signInWithPopup(auth,githubProvider)
          .then(result => {
              setUser(result.user);
          })
      }
    const logout = () => {
        setIsLoading(true);
            signOut(auth)
            .then(() => {
                setUser({})
                .finally(()=> setIsLoading(false));
            })
    }
    //observe user state change
    useEffect(() => {
        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user);
            }
        })
    },[])
    return {
        error,
        user,
        isLoading,
        signInUsinggoogle,
        signInUsingGithub,
        logout
    }
}
export default useFirebase;