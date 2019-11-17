 import React from 'react'
// import Form from './components/Form'
import Projects from './components/Projects'
import AddProjects from './components/AddProjects'
import uuid from 'uuid'
import  {Provider} from 'react-redux'


class App extends React.Component{
  constructor(){
      super()
      this.state={
        projects:[]
      }
    }
  componentDidMount(){
this.setState({projects:[
  
    {
        id:uuid.v4(),
        title:'Bussines Website',
        category:'Web Disgn'
    },
    {
         id:uuid.v4(),
        title:'Social App',
        category:'Mobile Development'
    },
    {
       id:uuid.v4(),
        title:'Shopping card',
        category:'Web development'
    }
  

]})
  }
  handleAddproject(project){
   let projects=this.state.projects
   projects.push(project)
   
  }
  handleDeleteProject(id){
    let projects=this.state.projects;
    let index=projects.findIndex (x => x.id ===id)
    projects.splice(index,1)
    this.setState({projects:projects})
  }
  
  render(){
  return(
      <React.Fragment>
      <AddProjects addProject={this.handleAddproject.bind(this)}/>
      <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      {/* <Form/> */}
     
      </React.Fragment>
  )
}
}
 

export default App
