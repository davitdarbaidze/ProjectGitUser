import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from '../Components/Loader'


//display each product by going on corresponding id site.com/id
function Product(){
    const {id} = useParams()
    const url = `https://5fa3d7e4f10026001618e087.mockapi.io/Products/${id}`
                
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })
    let content = null


    useEffect(()=>{
        setProduct({
            loading: true,
            data: null,
            error: false
        })
//with Axios try the GET command with given url
        Axios.get(url)
            .then(response => {
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false 
                })
            })
            .catch(() => {
                setProduct({
                    loading:false,
                    data:null,
                    error:true
                })
            })
    }, [url])


    if(product.loading){
       content = <Loader></Loader>
    }
    if(product.error){
        content = <p>Please refresh or try again later</p>
    }
    if(product.data){
        return(
            content = 
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img src={product.data.images[0].ImageUrl} alt={product.name}
                    />
                </div>
                <div className='font-bold text-xl mb-3'>
                    ${product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>


                
            </div>
          
        )
    }else{
        return(
            <div>
                {content}
            </div>
        )       
    }
}

export default Product 