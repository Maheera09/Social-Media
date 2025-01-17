import React, { useContext, useEffect, useState } from "react";
import Post from "./post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./loadingSpinner";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);
  console.log(postList);
  const [fetching, setFetching] = useState(false)


  useEffect(()=>{
    setFetching(true)

    const controller = new AbortController()
    const signal = controller.signal
    fetch("https://dummyjson.com/posts", {signal})
    .then((res)=>res.json())
    .then (data => {
     addInitialPosts(data.posts)
     setFetching(false)
    });

    return ()=>{
      console.log("Cleaning up UseEffect.");
      controller.abort();
    }


  }, [])

  return (
    <>
    {fetching && <LoadingSpinner/>}
    {
     !fetching && postList.length===0 && <WelcomeMessage/>
    }
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
