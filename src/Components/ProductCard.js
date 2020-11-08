import React from 'react'
import {Link} from 'react-router-dom'


function ProductCard(props){
    return (
        /*main page for each product*/
        <div className="border mb-4 rounded overflow-hidden">
            {/* if clicked on product takes you to this product getting Id of product from props */}
            <Link to={`/products/${props.product.id}`}>
                <div
                    style ={{
                        'backgroundImage': `url('${props.product.images[0].ImageUrl}')`,
                    }}
                    className="w-full h-64 bg-blue bg-cover"
                    >
                </div>
                {/* display button with title View clickable */}
            </Link>
            <div className="p-3">
                {/* display name of product */}
                    <h3 className="font-bold text-xl mb-3">
                        <Link to = {`/products/${props.product.id}`}>
                            {props.product.name}
                        </Link>
                    </h3>
                    {/* display price of product */}
                    <div className="font-bold mb-3">
                        ${props.product.price}
                    </div>
                    {/* display description of product */}
                    <div className="mb-3">
                        ${props.product.description}
                    </div>
                    <Link 
                        to={`/products/${props.product.id}`}
                        className="bg-blue-500 text-white p-2 flex justify-center"
                    >
                    View
                    
                    </Link>
                    <div className="p-3"> 
                        <h3 className="font-bold text-xl mb-3">
                            <Link to={`/products/${props.product.id }`}>
                                {props.product.name}
                            </Link>
                        </h3>
                    </div>
            </div>
        </div>
    )
}
export default ProductCard