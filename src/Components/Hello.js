import React from "react"



class HelloWorld extends React.Component{

    //Component example of hooks with class version
    render (){
        return (
        <h1>Hello {this.props.name}</h1>
        )
    }
}

export default HelloWorld