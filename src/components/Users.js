import React from 'react'
import UsersItem from './UsersItem'
 class Users extends React.Component{
     deleteUser(id){
         this.props.onDelete(id)
     }
     render(){
         let userItem;
         if(this.props.users){
             userItem=this.props.users.map(users=>{
                 return(
                     <UsersItem onDelete={this.deleteUser.bind(this)} key={users.id} id={users.id} name={users.name} surname={users.username} users={users}/>

                 )
             })
         }
         return(
             <React.Fragment>
                 {userItem}
             </React.Fragment>
         )
     }
 }
 export default Users