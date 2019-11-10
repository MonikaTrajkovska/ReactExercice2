 import React from 'react'
// import Form from './components/Form'
import Projects from './components/Projects'
import  {Provider} from 'react-redux'


class App extends React.Component{
  constructor(){
      super()
      this.state={
          projects:[
              {
                  title:'Bussines Website',
                  category:'Web Disgn'
              },
              {
                  title:'Social App',
                  category:'Mobile Development'
              },
              {
                  title:'Shopping card',
                  category:'Web development'
              }
          ]
      }
  }
  render(){
  return(
      <React.Fragment>
      <h1>Moni</h1>
      <Projects projects={this.state.projects}/>
      {/* <Form/> */}
     
      </React.Fragment>
  )
}
}
 

export default App
