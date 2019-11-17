import React from 'react'
import ProjectItem from './ProjectItem';


class Projects extends React.Component{
    deleteProject(id){
        this.props.onDelete(id)
    }
   
    render(){
        let ProjectItems;
        if(this.props.projects){
            ProjectItems = this.props.projects.map(projects=>{
                // console.log(projects)
                return(
                    <ProjectItem  onDelete={this.deleteProject.bind(this)}  key={projects.title} projects={projects}/>
                )
            })
        }
       
    return(
        <React.Fragment>
            
        <h1>My new Application</h1>
        <h3>Latest project</h3>
        {ProjectItems}
       
        </React.Fragment>
    )
}
}
// Projects.propTypes={
//     projects:React.propTypes.array,
//     onDelete:React.propTypes.func
// }

export default Projects