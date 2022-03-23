import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, editPost } from "../actions/post.action";


const Post = ({ post }) => {

  const [editToggle, setEditToggle] = useState(false);
  const [editBody, setEditBody] = useState(post.content)
  const dispatch = useDispatch();

  const handleEdit = (element) => {
    element.preventDefault();

    const postData = {
      title: post.title,
      body: editBody,
      id: post.id
    };
    dispatch(editPost(postData))
    setEditToggle(false);
  }

  return (
    <div className="post">
      <h2>{post.title}</h2>

      {editToggle ? (
        <form onSubmit={element => handleEdit(element)}>
          <textarea defaultValue={post.body} onChange={element => setEditBody(element.target.value)}></textarea>
          <input type="submit" value="Valider modification" />
        </form>
      ) : (
      <p>{post.body}</p>
      )}

      {
        <div className="edit-delete">
          <img onClick={() => setEditToggle(!editToggle)} src="./icons/edit.svg" alt="edit"/>
          <img onClick={() => dispatch(deletePost(post.id))} src="./icons/delete.svg" alt="delete"/>
        </div>
      }

    </div>
  );
};

export default Post;
