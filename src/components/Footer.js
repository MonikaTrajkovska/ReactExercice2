import React from 'react'

class Footer extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"Sally",
            surname:"Trajkovska"

        }
    }
    render (){
        return(
            <React.Fragment>
                <h1>{this.state.name}</h1>
                <h1>{this.state.surname}</h1>
            </React.Fragment>
        )
    }
}
export default Footer









