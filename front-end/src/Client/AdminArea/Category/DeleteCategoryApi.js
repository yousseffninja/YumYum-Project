import {createContext, useContext, useState} from "react";
import axios from "axios";

const DeleteCategoryContext = createContext();

const DeleteCategoryProvider = (props) =>{
    const [category, setCategory] = useState(()=>{
        const token = localStorage.getItem("token");
        if(token) return true;
        else return false;
    });

    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);

    const deleteCategoryApi = (category_id) => {
        axios.delete(`http://localhost:5000/api/category/${category_id}` ,
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
        <DeleteCategoryContext.Provider value = {{token, category, error, deleteCategoryApi, errorApi}}>
            {props.children}
        </DeleteCategoryContext.Provider>
    )
}

export  {DeleteCategoryContext, DeleteCategoryProvider};