import React from "react";

const Tweet = ({ tweet }) => {
  const { _id, date, author, text, likes, dislikes } = tweet;
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
        <p>likes: {likes}</p>
        <p>dislikes: {dislikes}</p>
      </div>
      <hr></hr>
    </div>
  );
};

export default Tweet;
