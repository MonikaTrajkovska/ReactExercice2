import React from 'react'
import ProjectItem from './ProjectItem';


class Projects extends React.Component{
   
    render(){
        let ProjectItems;
        if(this.props.projects){
            ProjectItems = this.props.projects.map(projects=>{
                // console.log(projects)
                return(
                    <ProjectItem key={projects.title} projects={projects}/>
                )
            })
        }
       
    return(
        <React.Fragment>
            
        <h1>My new Application</h1>
        {ProjectItems}
       
        </React.Fragment>
    )
}
}

export default Projects