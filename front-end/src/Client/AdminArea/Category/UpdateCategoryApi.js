import {createContext, useState} from "react";
import axios from "axios";
const UpdateCategoryContext = createContext();

const UpdateCategoryProvider = (props) =>{
    const [category, setCategory] = useState(()=>{
        const token = localStorage.getItem("token");
        if(token) return true;
        else return false;
    });

    const [token, setToken] = useState(null);

    const [error, setError] = useState(null);

    const updateCategoryApi = (category_id, name) => {

        axios.put(`http://localhost:5000/api/category/${category_id}` ,{
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
        <UpdateCategoryContext.Provider value = {{token, category, error, updateCategoryApi, errorApi}}>
            {props.children}
        </UpdateCategoryContext.Provider>
    )
}

export  {UpdateCategoryContext, UpdateCategoryProvider};