import {createContext, useContext, useState} from "react";
import axios from "axios";
const LoginContext = createContext();

const LoginProvider = (props)=>{
    const [login, setLogin] = useState(()=>{
        const token = localStorage.getItem("token");
        if(token) return true;
        else return false;
    });
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);
    //
    //
    const loginApi = (email , password)=>{
        axios.post("http://localhost:5000/user/login" , {
            email: email,
            password: password
        }).then(res=>{
            if(res.data.accesstoken){
                localStorage.setItem("token",res.data.accesstoken)
                setToken(res.data.accesstoken);
                setLogin(true);
                setError(null);
            }else{
                setLogin(false);
                setError("login invalid");
            }
        }).catch(err=>{

            setError(err);
        })
    }

    const logoutApi = ()=>{
        localStorage.removeItem("token");
        setLogin(false);
        setToken(null);
    }


    const errorApi = (error)=>{
        setError(error);
    }

    return (
        <LoginContext.Provider value={{token, login, error, loginApi, logoutApi, errorApi}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export {LoginContext ,LoginProvider};