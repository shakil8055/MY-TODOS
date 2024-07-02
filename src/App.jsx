import React, { useState } from 'react'
import TopBar from './components/TopBar'


function App() {
  let [todo,setTodo]=useState([
    {
    id:1,
    title:" Shakil task ",
    description:" This is the description for task",
    status: "Not completed",
  },
 
  
])
let [completed,setCompleted]=useState("All")
  return <>
  <TopBar todo={todo} setTodo={setTodo} completed={completed} setCompleted={setCompleted}/>
  </>
  
}

export default App
