import React from 'react'

class UsersItem extends React.Component{
    deleteUser(id){
        this.props.onDelete(id)
    }
    render(){
       
        return(
        <table style={{ border: '1px solid black' }} >
            <thead>
                <tr>
                    <th> {this.props.users.id}</th>
                    <th>{this.props.users.name} </th>
                    <th>{this.props.users.username}</th>
                    <a href='#' onClick={this.deleteUser.bind(this ,this.props.users.id)}>x</a>
                </tr>
               
            </thead>
        </table>
        )
    }
}
export default UsersItem
