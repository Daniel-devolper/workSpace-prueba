import React from 'react'
// import './style.css'

export const Post = ({id, title, completed}) => {
    
    return (
        <>  
                <tbody>
                <tr>
                    <th scope="row">{id}</th>
                    <td>{title}</td>
                    <td className="completed">{
                        
                        (JSON.stringify(completed)==='false') ? <p>No</p> : <p>Si</p> 
                    }
                    </td>
                </tr>
                </tbody>
            
        </>
    )
}