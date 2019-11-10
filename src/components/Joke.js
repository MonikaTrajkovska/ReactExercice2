import React from 'react'


function Joke (props){
    return(

<React.Fragment>
<h3 style={{}}>Question :{props.question}</h3>
<h3>Answer:{props.answer}</h3>

</React.Fragment>
    )
}
export default Joke 