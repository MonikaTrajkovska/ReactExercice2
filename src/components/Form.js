import React from 'react'
class Form extends React.Component{
    constructor(){
        super()
        this.state={
            firstName:"",
            lastName:"",
            isFriendly:false,
            gender:"",
            favColor:""
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
        const {name,value,type,checked}=event.target
        type==='checkbox' ? this.setState ({[name] : checked}) : this.setState({[name] :value})
        
    }
    render(){
        return(
            <form>
                <input type="text" value={this.state.firstName} name="firstName"placeholder="First name" onChange={this.handleChange}/>
                <br/>
                <input type="text" value={this.state.lastName} name="lastName" placeholder="Last name" onChange={this.handleChange}/>
                <br/>
                <textarea></textarea>
                <label>
                    <input type='checkbox' name='isFriendly' checked={this.state.isFriendly} onChange={this.handleChange}/>
                    Is friendly?
                </label>
                <br/>
                <textarea>Some text</textarea>
                <label>
                    <input type='radio' name='gender' checked={this.state.gender === "male"} value="male" onChange={this.handleChange}/>
                    Male
                </label>
                <br/>
               
                <label>
                    <input type='radio' name='gender' checked={this.state.gender ==="female"} value="female" onChange={this.handleChange}/>
                    Female
                </label>
                <br/>
                <select value={this.state.favColor} onChange={this.handleChange} name="favColor">
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
                </select>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are {this.state.gender}</h2>
                <h3>Your favourite color is {this.state.favColor}</h3>
            </form>
            
        )
    }
}

export default Form