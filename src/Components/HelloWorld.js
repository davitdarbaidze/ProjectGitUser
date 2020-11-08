import React from 'react'


function HelloWorld(props){
    //Component for using hooks version with props
    return (
        <div>
            Hello {props.name}
        </div>
    )
}

export default HelloWorld