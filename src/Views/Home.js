import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'

function Home(){
    
    //url to get the list of products from MockAPI
    const url = `https://5fa3d7e4f10026001618e087.mockapi.io/Products?page=1&limit=10`


    //hook for displaying data, loading and error
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })


    //// Similar to componentDidMount and componentDidUpdate:
    useEffect(()=>{
        setProducts({
            loading: true,
            data: null,
            error: false
        })
        //with Axios try the GET command with given url
        Axios.get(url)
            .then(response => {
                setProducts({
                    loading: false,
                    //setting data with response.data if we have goten the data
                    data: response.data,
                    error: false 
                })
            })
            //catch if error happens
            .catch(() => {
                setProducts({
                    loading:false,
                    data:null,
                    error:true
                })
            })
    }, [url])

    //set content initially to null
    let content = null

    //display loading icon if needed
    if(products.loading){
        content = <Loader></Loader>
     }
     //display error 
     if(products.error){
         content = <p>Please refresh or try again later</p>
     }
     //if we have data map over the list and display them
     if(products.data){
        return(
            content = 
            products.data.map((product,key) => 
                <div key={product.id}>
                    <ProductCard
                        product = {product}
                    />
                </div>  
            
            )
          
        )
    }else{
    return(
        <div>
            <h1 className="font-bold 2xl">Best Sellers</h1>
            {content}
        </div>
    )
    }
}

export default Home