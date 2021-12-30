import {createContext, useContext, useState} from "react";
import axios from "axios";
const SignUpContext = createContext();

const SignUpProvider = (props)=>{
    const [signUp, setSignUp] = useState(()=>{

    });
    const [error, setError] = useState(null);
    //
    //
    const signUpApi = (name ,email , password)=>{
        axios.post("http://localhost:5000/user/register" , {
            name : name,
            email: email,
            password: password
        }).then(res=>{

        }).catch(err=>{

            setError(err);
        })
    }

    const errorApi = (error)=>{
        setError(error);
    }

    return (
        <SignUpContext.Provider value={{signUp, error, signUpApi, errorApi}}>
            {props.children}
        </SignUpContext.Provider>
    )
}

export {SignUpContext ,SignUpProvider};