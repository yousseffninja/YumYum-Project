import {createContext, useContext, useState} from "react";
import axios from "axios";
const CreateCategoryContext = createContext();

const CreateCategoryProvider = (props) =>{
    const [category, setCategory] = useState(()=>{
        const token = localStorage.getItem("token");
        if(token) return true;
        else return false;
    });
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);
    const createCategoryApi = (name) => {
        axios.post("http://localhost:5000/api/category" ,{
          name: name
        },
        {
            headers: {Authorization: localStorage.getItem('token')}
        }).then(res=>{
            if(res.data.accesstoken){
                localStorage.setItem("token",res.data.accesstoken)
                setToken(res.data.accesstoken);
                setError(null);
            }else{

                setError("login invalid");
            }
        }).catch(err=>{
            setError(err);
        })
    }

    const errorApi = (error)=>{
        setError(error);
    }

    return(
        <CreateCategoryContext.Provider value = {{token, category, error, createCategoryApi, errorApi}}>
            {props.children}
        </CreateCategoryContext.Provider>
    )
}

export  {CreateCategoryContext, CreateCategoryProvider};