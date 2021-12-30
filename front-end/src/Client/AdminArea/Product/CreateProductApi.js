import {createContext, useContext, useState} from "react";
import axios from "axios";
const CreateProductContext = createContext();

const CreateProductProvider = (props) =>{
    const [product, setProduct] = useState(()=>{
        const token = localStorage.getItem("token");
        if(token) return true;
        else return false;
    });

    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);

    const createProductApi = (product_id, title, price, description, images, category) => {
        axios.post("http://localhost:5000/api/products" ,{
                product_id: product_id,
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
        <CreateProductContext.Provider value = {{token, product, error, createProductApi, errorApi}}>
            {props.children}
        </CreateProductContext.Provider>
    )
}

export  {CreateProductContext, CreateProductProvider};