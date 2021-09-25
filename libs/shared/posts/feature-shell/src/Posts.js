// import { GetTodos } from './GetTodos'
// import { Post } from './Post'
import React, { useEffect, useState } from 'react'
import {GetTodos} from '../../../get-todos/data-acces/src/GetTodos'; 
import {Post} from '../../../post/ui/src/Post';

export const Posts = () => {
    
    const [todos, setTodos] = useState([])

    useEffect(() => {
        GetTodos()
            .then(resp => {
             
                setTodos(resp);
            })
        
    }, [])
    
    return (
        <>
            <h1 className="mb-4 text-center">List Of Post</h1>
            <table>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Titulos</th>
                        <th scope="col">Completado</th>
                    </tr>
                </thead>
                {
                    todos.map((todo)=>(
                        <Post key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}/>
                    ))                
                }
            </table>
        </>
    )
}
