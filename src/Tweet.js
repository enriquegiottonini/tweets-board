import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const Tweet = ({ tweet }) => {
  const { _id, author, text } = tweet;

  const date = new Date(tweet.date).toString();

  const [likes, setLikes] = useState(tweet.likes);
  const [dislikes, setDislikes] = useState(tweet.dislikes);
  const [newLikes, setNewLikes] = useState(0);
  const [newDislikes, setNewDislikes] = useState(0);

  useEffect(() => {
    if (newLikes + newDislikes >= 1) {
      console.log(newDislikes);
      axios.patch(`http://localhost:3001/api/tweet/${_id}`, {
        likes: newLikes,
        dislikes: newDislikes,
      });
      setNewLikes(0);
      setNewDislikes(0);
    }
  }, [likes, dislikes]);

  return (
    <div>
      <hr></hr>
      <div>
        <p>id: {_id}</p>
        <p>Date: {date}</p>
        <p>Author: {author}</p>
      </div>

      <div>
        <p>{text}</p>
      </div>

      <div>
        <button
          onClick={() => {
            setLikes(likes + 1);
            setNewLikes(newLikes + 1);
          }}
        >
          likes: {likes}
        </button>
        <button
          onClick={() => {
            setDislikes(dislikes + 1);
            setNewDislikes(newDislikes + 1);
          }}
        >
          dislikes: {dislikes}
        </button>
      </div>
      <hr></hr>
    </div>
  );
};

export default Tweet;
