import { useEffect, useState } from "react";
import {Post} from '@example/posts/utils'

const url=`https://jsonplaceholder.typicode.com/todos`

export function useSinglePost(id: string): {post: Post | null}{

    const [post, setPost] = useState(null)


    useEffect(()=>{
        
        fetch(`${url}/${id}`).then((res)=>{
            return res.json();
        }).then((data )=>{
            setPost(data)
            
        });

    },[id])

    return {post};
}