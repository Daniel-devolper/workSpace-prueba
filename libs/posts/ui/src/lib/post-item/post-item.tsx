import {Post} from '@example/posts/utils'
import Link from 'next/link';
/* eslint-disable-next-line */
export interface PostItemProps {
  post: Post
}

export function PostItem(props: PostItemProps) {
  
  const {id, title, completed} = props.post;

  return (
    <>  
            <tbody>
              <tr>
              <Link href={`/posts/${id}`}>
                 <th scope="row" style={{textDecoration: 'underline', cursor: 'pointer'}}>{id}</th>
              </Link>
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

export default PostItem;
