import React, { useState }  from 'react'




//search Component
function Search(){

    //variable to control and modify search input text
    const [searchInput, setSearchInput] = useState("Search member")
    //style for input 
    const BarStyling = {background:"#F2F1F9", border:"none", padding:"0.5rem"};

    

    
    
    //function to run search for user when enter is clicked
    function keyPress(e){
        
        
        if(e.keyCode === 13){           
            //open new page in same window
           window.open(e.target.value,"_self"); 
        }
    }
      
    
    
    //Component for loading sign
    return(
        <div className="grid py-2">
            {/* display search bar on press of enter evoke function and with e change update the input itself */}
            <input autoComplete="on" style= {BarStyling} value={searchInput} onKeyDown={keyPress} onChange={(e) => setSearchInput(e.target.value)} />
            
            
        </div>
    ) 

}

export default Search