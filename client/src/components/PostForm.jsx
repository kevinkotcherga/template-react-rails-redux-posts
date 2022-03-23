import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, getPosts } from "../actions/post.action";

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();

    if (title && body){
      const data = {
        title,
        body
      };

      await dispatch(addPost(data));
      setTitle('');
      setBody('');
      dispatch(getPosts());
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleForm(e)}>
        <input type="text" placeholder="Titre du poste" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea placeholder="Postez vos pensées..." value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
        <input className="submit" type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
