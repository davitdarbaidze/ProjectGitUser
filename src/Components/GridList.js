import React from 'react'
import Landing from './LandingPage'
import {useState} from 'react'
import Search from './Search'

function GridList(){
    //variable for storing state of view, to modify grid list view
    const [view, setView] = useState(false)
    
    function GridViewListView(){
        setView(!view) 
    }




  
    return(
        <div className="grid">
            
            <div className="text-right py-2">
                {/* buttons for grid/list view */}
                <button onClick={GridViewListView} class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none">List</button>
                <button onClick={GridViewListView} class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none">Grid</button>
                <Search></Search>
            </div>
            
            

            {/* Passing grid/list view property to a main page which renders users */}
            <div><Landing view = {view}></Landing></div>
            

        </div>
    )
}

export default GridList