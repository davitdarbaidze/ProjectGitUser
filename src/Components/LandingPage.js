import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Loader from './Loader'
import ListView from './ListView'
import GridView from './GridView'


function Landing(props){
    //component for displaying users

    //Url for getting json file of users from github
    const url = "https://api.github.com/users"

    //hook to set the users
    const [users, setUsers] = useState({
        loading: false,
        data: null,
        error: false,
        

    })
    //initializing content variable with null at first, later it will have each users profile as value
    let content = null

    
    useEffect(()=>{
        setUsers({
            loading: true,
            data: null,
            error: false
        })
        //with Axios try the GET API end point of Users
        Axios.get(url)
            .then(response => {
                setUsers({
                    loading: false,
                    //setting data with
                    data: response.data,
                    error: false 
                })
                
            })
            //catch if error happens
            .catch(() => {
                setUsers({
                    loading:false,
                    data:null,
                    error:true
                })
            })
    }, [url])
    

    

    

    //display loading icon if needed
    if(users.loading){
        content = <Loader></Loader>
     }
     //display error in case there is error
     if(users.error){
         content = <p>Please refresh or try again later</p>
     }
     //if we have data map over the list and display them
     //list case
     if(users.data){
        if(props.view === false){
            return (
                content = 
                users.data.map((user,key) => 
                    <div key={user.id}>                   
    
                        <ListView user = {user}></ListView>
                        
                    </div>                
                )
            )
            // grid case
        }else if(props.view === true){
            return (
                users.data.map((user,key) => 
                <div key={user.id} className="flex inline-flex px-2 py-1 w-64">                   
                    
                    <GridView user = {user}></GridView>
                    
                    
                    
                </div>                
            )
            )
        }
    }else{
        //loading component before get request gets the data
    return(
        <div>
           <Loader></Loader>
        </div>
    )
    }
    
}

export default Landing