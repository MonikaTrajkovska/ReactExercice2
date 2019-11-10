import React from 'react'

function Moni(){
    const firstname="Moni"
    const lastname="Trajkovska "
    const date=new Date()
    return(
        <React.Fragment>
        <h1>Hello {firstname + "" + lastname}</h1>
        <h2>Currently is {date.getHours() %12} o'clock </h2>
       
        </React.Fragment>
    )
}

export default Moni