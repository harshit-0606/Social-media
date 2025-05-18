import React, { useContext, useState, useEffect } from 'react'
import { PostContext } from '../store/postStore';

function CreatePost() {
  const [editPost, setEditPost] = useState(false);

  const { addPostHandler, postToBeEdit, updatePostHandler } = useContext(PostContext);

  const [postTitle, setPostTitle] = useState("")
  const [postBody, setPostBody] = useState("")
  const [postReactions, setPostReactions] = useState("")
  const [postTags, setPostTags] = useState("")

  let title = "";
  let body = "";
  let reactions = "";
  let tags = "";

  const onChangeTitleHandler = (e) => {
    title = setPostTitle(e.target.value)
  }

  const onChangeBodyHandler = (e) => {
    body = setPostBody(e.target.value)
  }

  const onChangereactionHandler = (e) => {
    reactions = setPostReactions(Number(e.target.value))
  }

  const onChangePostTagHandler = (e) => {
    tags = setPostTags(e.target.value.split(","))
  }

  useEffect(() => {
    if (postToBeEdit) {
      setEditPost(true);
      setPostTitle(postToBeEdit.title);
      setPostBody(postToBeEdit.body);
      setPostReactions(postToBeEdit.reactions);
      setPostTags(postToBeEdit.tags);
    }
  }, [postToBeEdit]);


  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    const formData = {
      id: postToBeEdit?.id,
      title: postTitle,
      body: postBody,
      reactions: postReactions,
      tags: postTags
    };
    if (postToBeEdit) {
      updatePostHandler(formData)
    } else {
      addPostHandler(title = postTitle, body = postBody, reactions = postReactions, tags = postTags)
    }

     setPostTitle("");
      setPostBody("");
      setPostReactions("");
      setPostTags("");

  }

  return (
    <form action='/' onSubmit={onSubmitFormHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title"
          onChange={onChangeTitleHandler}
          value={postTitle}
        />
      </div>

      <div>
        <label htmlFor="body">Body</label>
        <input type="text" name="body" id="body"
          onChange={onChangeBodyHandler}
          value={postBody} />
      </div>

      <div>
        <label htmlFor="reactions">reactions</label>
        <input type="text" name="user-id" id="user-id"
          onChange={onChangereactionHandler}
          value={postReactions} />
      </div>

      <div>
        <label htmlFor="tags">Tags</label>
        <input type="text" name="tags" id="tags"
          onChange={onChangePostTagHandler}
          value={postTags} />
      </div>

      <button>{editPost ? "Save" : "Submit"}</button>
    </form>
  )
}

export default CreatePost
