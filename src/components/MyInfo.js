import React from 'react'

class MyInfo extends React.Component{
    constructor(){
        super()
        this.state={
            Login:false
        }
    }
    render(){
        let word
        if(this.state.Login===true){
            word ="in"
        }
        else {
            word="out"
        }
        return(
            <p>Currently {word}</p>
        )
    }

}

export default MyInfo