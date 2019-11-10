import React from 'react'


class ProjectItem extends React.Component{
    render(){
        
    return(
       <li>
           {this.props.projects.title} - {this.props.projects.category}
       </li>
    )
}
}

export default ProjectItem