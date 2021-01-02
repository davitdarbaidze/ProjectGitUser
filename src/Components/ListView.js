
import {
  Link
  } from "react-router-dom"




//List view of profile
function ListView(props){  
    //useParam to get end of link which will be users login name in this case
    // const {login} = useParams()

    //link to use with Axios
    // const repoUrl = `https://api.github.com/users/${login}/repos`
    // const url = `https://api.github.com/users/${login}`
    
    return(
       // using talwind css to make a user profile
<div class="flex flex-col ">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8  w-screen">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg ">
        <table class="min-w-full divide-y divide-gray-200 justify-between ">
          <thead class="bg-gray-50  ">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs max-w-md font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>              
              <th scope="col" className="px-6 py-3  text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>              
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200 ">
            <tr class="">
              <td class="px-6 py-4 whitespace-nowrap  ">
                <div class="flex items-center  max-w-md">
                  <div class="flex-shrink-0 h-10 ">
                    <img class="h-10 w-10 rounded-full" src={props.user.avatar_url} alt="avatar"/>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900 ">
                    <Link to={`/${props.user.login}`}>                    
                      {props.user.login}</Link>
                    </div>
                    {/* <ReposFuck  repoUrl = {props.user.repos_url}></ReposFuck> */}
                  </div>
                </div>
              </td>
              <td class="px-5 py-4 text-right whitespace-nowrap">
                <span class="px-2 inline-flex text-xs bg-green-100 leading-5 font-semibold rounded-full text-green-800">
                  {props.user.type}
                </span>                
              </td>
            </tr>            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

  )
    
}

export default ListView