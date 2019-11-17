import React from 'react'
import Users from './Users'
import AddUsers from './AddUsers'


class Register extends React.Component{
  constructor(){
      super()
      this.state={
          users:[]
            
      }
  }
   componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>{
          this.setState({
              users:data
          })
      })
    }
    handleaddUser(user){
        let users=this.state.users;
        users.push(user);
        this.setState({
            users:users

        })
    }
  render(){
      return(
          <React.Fragment>
             <Users users={this.state.users}/>
             <AddUsers addUser={this.handleaddUser.bind(this)}/>
          </React.Fragment>
      )
  }
}
export default Register