import React, { useState } from 'react'

function Create() {
  const [ task,setTask] = useState()
  const handelAdd = () =>{
    
  }
  return (
    <div className='create_form'>
        <input type="text" name="" id="" onChange={(e)=> setTask(e.target.value)} placeholder='enter Task'/>
        <button type="button" onClick={addTask}>Add</button>
    </div>
  )
}

export default Create