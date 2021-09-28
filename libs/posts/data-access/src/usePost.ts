import { useEffect, useState } from "react";
import {Post} from '@example/posts/utils'

const url=`https://jsonplaceholder.typicode.com/todos?_limit=15`

export function usePost(): {posts: Post []}{

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        
        const resp=  fetch(url).then((res)=>{
            return res.json();
        }).then((data )=>{
            setPosts(data)
            
        });

    },[])

    return {posts};
}