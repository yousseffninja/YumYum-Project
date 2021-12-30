import {createContext, useState} from "react";
import axios from "axios";
const UpdateProductContext = createContext();

const UpdateProductProvider = (props) =>{
    const [product, setProduct] = useState(()=>{
        const token = localStorage.getItem("token");
        if(token) return true;
        else return false;
    });

    const [token, setToken] = useState(null);

    const [error, setError] = useState(null);

    const updateProductApi = (product_id, title, price, description, images, category) => {
        
        axios.put(`http://localhost:5000/api/products/${product_id}` ,{
                title: title,
                price: price,
                description: description,
                images: images,
                category: category

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
        <UpdateProductContext.Provider value = {{token, product, error, updateProductApi, errorApi}}>
            {props.children}
        </UpdateProductContext.Provider>
    )
}

export  {UpdateProductContext, UpdateProductProvider};