import { DetailsItem } from "@example/posts/feature-shell";
import { useRouter } from "next/router";


function PostsDetail() {
  
    const router = useRouter();
    const {id}= router.query;
  
    return (
    <>
      <h1>Post detail</h1>
      <DetailsItem id={id as string}/>
    </>
  );
}

export default PostsDetail;