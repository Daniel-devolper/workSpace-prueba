import { Post } from '@example/posts/utils';

/* eslint-disable-next-line */
export interface CardDetailProps {
  post: Post | null
}

export function CardDetail(props: CardDetailProps) {
  
  // ((props.post ) && (const {id, title, completed}= props.post))
  
  return (
    <div>
      {
          props.post &&
        <section>
          <p>Id: {props.post.id} </p>
          <p>Title: {props.post.title} </p>
        </section>
      }
    </div>
  );
}

export default CardDetail;
