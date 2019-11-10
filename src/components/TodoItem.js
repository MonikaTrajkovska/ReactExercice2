
import React from 'react'
import Box from './components/Box'
import todosData from './components/todosData'


function TodoItem(){
    const todoItem=todosData.map(item =><Box key={item.id} item={item} /> )
    return(
        <div>
        {todoItem}
        </div>
    )
}


export default TodoItem




