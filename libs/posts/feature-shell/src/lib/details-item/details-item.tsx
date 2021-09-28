import { useSinglePost } from '@example/posts/data-access';
import { CardDetail } from '@example/posts/ui';

/* eslint-disable-next-line */
export interface DetailsItemProps {
  id: string
}

export function DetailsItem(props: DetailsItemProps) {
  

  const {post} = useSinglePost(props.id);

  return (
    
      <CardDetail post={post}/>
    
  );
}

export default DetailsItem;
