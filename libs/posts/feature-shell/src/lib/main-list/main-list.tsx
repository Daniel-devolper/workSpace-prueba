import { usePost } from '@example/posts/data-access';
import {PostItem} from '@example/posts/ui'



export interface MainListProps {}

export function MainList(props: MainListProps) {
  
  const {posts}= usePost();
  
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
                posts.map((post)=>(
                    <PostItem key={post.id} post={post}/> //el destructiring se esta haciendo en el componente hijo 
                ))                
            }
        </table>
    </>
  )
}

export default MainList;
