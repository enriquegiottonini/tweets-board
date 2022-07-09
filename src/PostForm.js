import React from "react";
import { useState } from "react";

const PostForm = ({ setTweetsState }) => {
  const [author, setAuthor] = useState("");
  const [post, setPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim()) setAuthor("Anonimous");

    setTweetsState(author, post);

    setAuthor("");
    setPost("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          author:
          <input
            placeholder="Anonimous"
            required
            value={author}
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
          />
        </label>
        <label>
          text:
          <textarea
            required
            value={post}
            onChange={(event) => {
              setPost(event.target.value);
            }}
          />
        </label>
        <button type="submit">post</button>
      </form>
    </>
  );
};

export default PostForm;
