import {useParams, Link} from 'react-router-dom'
import Axios from 'axios'
import {React, useState, useEffect} from 'react'
import Loader from './Loader'


function UserPage(){
    //useParam to get end of link which will be users login name in this case
    const {login} = useParams()

    //link to use with Axios
    const url = `https://api.github.com/users/${login}`
    const repoUrl = `https://api.github.com/users/${login}/repos`

    //array to put names of first 3 repositories
    let names = []
    

    //while get request is running waiting for 5 seconds and if no request then changing expired to true to display error message
    const [expired, setExpired] = useState(false)
    
    //variable to get repositories object from axios GET request
    const [repos,setRepos] = useState({
        repos:null
    })
    //variable to get user object from axios GET request
    const [profile, setProfile] = useState({
        loading: false,
        data: null,
        error: false
    })

    // hook to fetch the data of the user
    useEffect(()=>{
        setProfile({
            loading: true,
            data: null,
            error: false
        })
        //chaing two requests one to get the profile of the user and another to get the repositories
        Axios.get(url)
        //chaining two request together.
            .then((response) => {
                setProfile({
                    loading:false,
                    data:response.data,
                    error:false
                });
                
                return Axios.get(repoUrl)
            })
            .then((response)=> {
                setRepos({
                    repos: response.data
                })
                console.log(response.data)
            })
            //catch if error happens
            .catch(() => {
                setProfile({
                    loading:false,
                    data:null,
                    error:true
                })
            });
    }, [url])
        
    
// function to open users github page if clicked on his/her name   
function userProfilePage(){
        window.open(`https://api.github.com/users/${login}`, "_blank")
    }


//if user data exists display it
if(profile.data){
    


    // output for organization
    if(profile.data.type === "Organization"){
        return (
            <div className="wrapper" className="flex flex-col ">
            
            {/* display user profile picture and some data about it */}
            <div className="inline-flex pb-3 space-x-1 ">
                <div className=" h-24 w-24 ">
                    <img className="sm:rounded-lg" src={profile.data.avatar_url} alt="avatar"></img>
                    </div>
                <div className="py-8 px-4 text-center flex-grow shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <button className= "" onClick={userProfilePage}>{login}</button>
                </div>
                
    
            </div>
    
            {/* list detailed info of the use */}
            <div className="py-8 px-4 text-center flex-grow shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <div>You have searched for Organization and not user Organization name: {login} </div> 
       
            </div>
    
            {/* link button to take u back to home page */}
            <Link to="/" className="pt-3">
                    <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none">BACK</button>
            </Link>
        </div>
        )
    
    }
    //check if repos has content if yes add them to names array
    if(repos.repos == null ){
        names.push(
            "No repos"
        )
    } else if(repos.repos.length > 1){
        
        for(let i=0; i < 3; i++){
            names.push(repos.repos[i].name)  
        }
    }

    //output for User
    return (        
        <div className="wrapper" className="flex flex-col ">
        
        {/* display user profile picture and some data about it */}
        <div className=" font-serif inline-flex pb-3 space-x-1">
            <div className=" h-24 w-24 ">
                <img className="sm:rounded-lg" src={profile.data.avatar_url} alt="avatar"></img>
                </div>
                <Link to="" onClick={userProfilePage} className="flex-grow min-h-full "><div className= "min-h-full  py-8 px-4 font-bold text-center align-middle flex-grow shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                
                {profile.data.login}
                </div>
                </Link>
                <div className= "py-8 px-4 text-center flex-grow shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">{profile.data.type}</div>

            <div className= "py-1 px-4 text-center flex-grow shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">First 3 Repos: {names.map((name)=>{return <div className="text-sm font-thin">{name}</div> })}</div> 
        </div>

        {/* list detailed info of the use */}
        <div className="
        shadow overflow-hidden border-b border-gray-200 sm:rounded-lg px-2 py-2 font-serif">
            <div>You have searched for user: {login} </div> 
            <div>Name: {profile.data.name}</div>
            <div>Locaton: {profile.data.location}</div>
            <div>Public Repos: {profile.data.public_repos} </div>         
        </div>

        {/* link button to take u back to home page */}
        <Link to="/" className="pt-3">
                <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none">BACK</button>
        </Link>
    </div>
    )
}else{
    //in case data is empty return not found and back button
    if(expired){
        return(   
            <div >
               **Not found**
               <Link to="/" className="px-2">
                    <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none">BACK</button>
                </Link>
                
    
            </div>
        )
    }else{
        //display loading sign for 5 seconds
        setInterval(()=>{setExpired(true)},5000)
        return(
            <Loader></Loader>
        )
    }


    
}

    



    //Component for loading sign

}

export default UserPage