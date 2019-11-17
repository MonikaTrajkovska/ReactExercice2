import React from 'react'

class UsersItem extends React.Component{
    render(){
        return(
        <table style={{ border: '1px solid black' }} >
            <thead>
                <tr>
                    <th> {this.props.users.id}</th>
                    <th>{this.props.users.name} </th>
                    <th>{this.props.users.email}</th>
                </tr>
                
            </thead>
        </table>
        )
    }
}
export default UsersItem
