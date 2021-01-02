import React from 'react'
import {
    Link
  } from "react-router-dom"

function NavigationMenu(props){
    //Component to display the navigation menu, also some buttons are clickable to move to desired location
    return (
        <div>
            <div className='font-bold'>
                            The Menu
                </div>  
                        <ul>
                            <li>
                            <Link 
                                to="/" 
                                className="text-blue-500 border-t border-b block"
                                onClick = {props.closeMenu}>
                                    Home
                            </Link>
                            </li>
                            <li>
                            <Link 
                                to="/about" 
                                className="text-blue-500  border-b block"
                                onClick = {props.closeMenu}                           
                                >
                                    About
                            </Link>
                            </li>
                        </ul>
        </div>
    )
}

export default NavigationMenu