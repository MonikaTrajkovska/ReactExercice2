import React from 'react'
import uuid from 'uuid'



class AddProjects extends React.Component{
    constructor(){
        super()
        this.state={
            newProject:{}
        }
    }
    static defaultProps={
       
        categories:['Web Disgn','Web Development', 'Mobile Development']
    }
    handleSubmit(e){
      if(this.refs.title.value ===''){
          alert('title is reqiured')
      }else{
        this.setState({newProject:{
            id:uuid.v4(),
            title:this.refs.title.value,
            category:this.refs.category.value
        }},
        function(){
            // console.log(this.state)
            this.props.addProject(this.state.newProject)
        }
        )
      }
         e.preventDefault()
    }
   
    render(){
        let categoryOptions=this.props.categories.map(category=>{
            return <option key={category} value={category}> {category}</option>
        })
        
        return(
        <React.Fragment>
    
        <h3>Add Projects</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Ttitle</label><br/>
            <input type="text" ref="title"/>
            </div>
            <div>
                <label>Category</label><br/>
            <select ref="category">{categoryOptions}</select>
            </div>
            <input type="submit" value="submit"/>
        </form>
       
        </React.Fragment>
    )
}
}

export default AddProjects