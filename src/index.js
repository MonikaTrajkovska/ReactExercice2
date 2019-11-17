import ReactDOM from 'react-dom'
import React from 'react'
 import Register from './components/Register'
 

 import App from './App'


 import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

const app= document.getElementById('app')
const Menu =() => {
     return (
        <ul>
            <li>
                <Link to= '/'>App</Link>
            </li>
            
             <li>
                 <Link to= '/register'>Register</Link>
             </li> 
            
         </ul>
     )
 }

const Routes = () => {
    return (
<Router>
 <Menu/> 
<Switch>
 <Route exact  path= '/' component={App} />
 <Route  exact path='/Register' component={Register}/> 
  {/* <Route exact  path='/newproduct' component={NewProduct}/> 
  <Route exact  path='/header' component={Header}/>   */}
  

</Switch>
</Router>



    )
}

ReactDOM.render(<Routes/>, app)