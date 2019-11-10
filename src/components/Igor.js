import React from 'react'
// import Conditional from './components/Conditional'

// class Igor extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             isLoading: true
//         }
//     }
//     componentDidMount(){
//         setTimeout(()=>{
//             this.setState({
//                 isLoading:false
//             })
//         },1500)
//     }
// render(){
//     return(
//         <div>
//         <Conditional isLoading= {this.state.isLoading}/>
//         </div>
//     )
// }
// }
class Igor extends React.Component{
constructor(){
    super()
    this.state={
        isLoggedIn:false
    }
    this.handleClick==this.handleClick.bind(this)
}
handleClick(){
    this.setState(prevState =>{
    return {
        isLoggedIn: !prevState.isLoggedIn
    }
})
}
render(){
    let buttonText=this.state.isLoggedIn ? "LOG OUT " : "LOG IN "
    let displayText=this.state.isLoggedIn ? "Logged in " : "Log out"
    return(
        <div>
            <button onClick={this.handleClick} > {buttonText} </button>
            <h1>{displayText}</h1>

        </div>
    )
}

}


  

export default Igor