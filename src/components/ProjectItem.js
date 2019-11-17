import React from 'react'


class ProjectItem extends React.Component{
    deleteProject(id){
       this.props.onDelete(id)
    }
    render(){

        
    return(
       <li>
           {this.props.projects.title} - {this.props.projects.category}
           <a href='#' onClick={this.deleteProject.bind(this ,this.props.projects.id)}>x</a>
       </li>
    )
}
}

export default ProjectItem