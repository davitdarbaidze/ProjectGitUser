import React from 'react'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'
 
function Header(){
    //Component to return heading with Appname in left corner, if clicked takes to home / page also rendering Navigation
    return(
        <header className="border-b flex justify-between items-center">
            <Link to="/">
            <span className="font-bold">
                AppName
            </span>
            </Link>
            <Navigation></Navigation>
            
        </header>
    )
}

export default Header