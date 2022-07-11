import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const Tweet = ({ tweet }) => {
  const { _id, author, text } = tweet;

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(tweet.date).toLocaleDateString("en-US", options);

  const [likes, setLikes] = useState(tweet.likes);
  const [dislikes, setDislikes] = useState(tweet.dislikes);
  const [newLikes, setNewLikes] = useState(0);
  const [newDislikes, setNewDislikes] = useState(0);

  useEffect(() => {
    if (newLikes + newDislikes >= 1) {
      axios.patch(`/api/tweet/${_id}`, {
        likes: newLikes,
        dislikes: newDislikes,
      });
      setNewLikes(0);
      setNewDislikes(0);
    }
  }, [likes, dislikes]);

  return (
    <div className="tweet-card">
      <div className="tweet-content">
        <div className="tweet-header">
          <span>
            <strong>{author}</strong>
          </span>
          <span>@{author} - </span>
          <span>{date}</span>
        </div>

        <div>
          <p>{text}</p>
        </div>

        <div className="tweet-footer">
          <button
            className="tweet-footer-btn"
            onClick={() => {
              setLikes(likes + 1);
              setNewLikes(newLikes + 1);
            }}
          >
            <i className="fa-regular fa-thumbs-up like"></i>
            <span>{likes}</span>
          </button>

          <button
            className="tweet-footer-btn"
            onClick={() => {
              setDislikes(dislikes + 1);
              setNewDislikes(newDislikes + 1);
            }}
          >
            <i className="fa-regular fa-thumbs-down dislike"></i>
            <span>{dislikes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
