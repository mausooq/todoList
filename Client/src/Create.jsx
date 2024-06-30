import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const [ task,setTask] = useState()
  const addTask = () =>{
    axios.post('http://localhost:8080/addTask',{task:task},)
    .then(result =>{
      console.log(result)
      window.location='/'
    })
    .catch (error => console.log(error))
  }
  return (
    <div className='create_form'>
        <input type="text" name="" id="" onChange={(e)=> setTask(e.target.value)} placeholder='enter Task'/>
        <button type="button" onClick={addTask} >Add</button>
    </div>
  )
}

export default Create