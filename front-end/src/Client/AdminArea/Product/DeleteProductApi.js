import {createContext, useState} from "react";
import axios from "axios";
const DeleteProductContext = createContext();

const DeleteProductProvider = (props) =>{
    const [product, setProduct] = useState(()=>{
        const token = localStorage.getItem("token");
        if(token) return true;
        else return false;
    });

    const [token, setToken] = useState(null);

    const [error, setError] = useState(null);

    const deleteProductApi = (product_id, title) => {

        axios.delete(`http://localhost:5000/api/products/${product_id}` ,
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
        <DeleteProductContext.Provider value = {{token, product, error, deleteProductApi, errorApi}}>
            {props.children}
        </DeleteProductContext.Provider>
    )
}

export  {DeleteProductContext, DeleteProductProvider};