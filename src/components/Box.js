import React from 'react'



function Box (props){
   
    return(
        <React.Fragment>
        <input type ="checkbox"/>
        <p>{props.item} </p> 

        {/* <input type ="checkbox"/>
        <p>Placeholder text here </p>

   <input type ="checkbox"/>
        <p>Placeholder text here </p>

   <input type ="checkbox"/>
        <p>Placeholder text here </p> */}
        </React.Fragment>
    )
}
export default Box 