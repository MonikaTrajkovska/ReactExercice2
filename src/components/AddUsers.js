import React from 'react'

class AddUsers extends React.Component{
    constructor(){
        super()
        this.state={
            newUser:{}
        }
    }

    handleSubmit(e){
        if(this.refs.name.value===''){
            alert('name s reguired')
        }else{
            this.setState({newUser:{
                name:this.refs.value,
                surname:this.refs.surname.value
            }
            },
            function(){
                this.props.addUser(this.state.newUser)
            }

            )
        }
        e.preventDefault()
    }

render(){
    return(
        <React.Fragment>
            <h3>Add New User</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Name</label>
                    <input type='text' ref='name'/>
                </div>
                <div>
                    <label>Surname</label>
                    <input type='text' ref='surname' />
                </div>
                <input type='submit' value='submit'/>
            </form>
        </React.Fragment>
    )
}
}
export default AddUsers