import React from "react";
import Tweet from "./Tweet";

const Board = ({ isLoading, allTweets }) => {
  if (isLoading) return <p>Loading ... </p>;

  return (
    <>
      {allTweets.map((tweet) => (
        <div key={tweet._id}>
          <Tweet tweet={tweet} />
        </div>
      ))}
    </>
  );
};

export default Board;
