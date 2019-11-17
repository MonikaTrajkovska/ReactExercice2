import React from 'react'
import UsersItem from './UsersItem'
 class Users extends React.Component{
     render(){
         let userItem;
         if(this.props.users){
             userItem=this.props.users.map(users=>{
                 return(
                     <UsersItem key={users.id} id={users.id} name={users.name} surname={users.surname} users={users}/>

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