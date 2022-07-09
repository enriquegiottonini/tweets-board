import axios from "axios";
import React from "react";
import { useState } from "react";

const PostForm = () => {
  const [author, setAuthor] = useState("");
  const [post, setPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim()) setAuthor("Anonimous");

    const tweet = {
      date: new Date().toString(),
      author: author,
      text: post,
      likes: 0,
      dislikes: 0,
    };

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
