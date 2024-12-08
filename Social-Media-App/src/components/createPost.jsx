import React, { useContext, useRef } from "react";
import PostListProvider, { PostList } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostList);
  const useridElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userid = useridElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    addPost(userid, postTitle, postBody, reactions, tags);
    useridElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userid" className="form-label">
            Enter User id
          </label>
          <input
            type="text"
            className="form-control"
            id="userid"
            ref={useridElement}
            aria-describedby="emailHelp"
            placeholder="User Id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            ref={postTitleElement}
            id="title"
            aria-describedby="emailHelp"
            placeholder="How are you feeling today?"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            type="text"
            rows="4"
            ref={postBodyElement}
            className="form-control"
            id="content"
            aria-describedby="emailHelp"
            placeholder="Enter description of your post."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            type="text"
            ref={reactionsElement}
            className="form-control"
            id="reactions"
            aria-describedby="emailHelp"
            placeholder="How many people reacted to this post?"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            aria-describedby="emailHelp"
            placeholder="Enter multiple tags using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}

export default CreatePost;
