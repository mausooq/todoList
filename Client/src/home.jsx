import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';

function Home(){
    const [todos, setTodos] =useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/getTodo')
        .then(response => setTodos(response.data))
        .catch(error => console.log(error));
    }, []);
    
    return(
        <div className='Home'>
           <h2>Todo List</h2>
           <Create/>
           {
            todos.length === 0 
            ?
                <div><h2>No Record</h2></div>
            :
            todos.map(todo => (
                <div className='HomeTask'>
                    <p>{todo.task}</p>
                </div>
            ))
        
           }
        </div>
    )
}

export default Home;