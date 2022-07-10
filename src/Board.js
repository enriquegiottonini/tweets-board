import React from "react";
import Tweet from "./Tweet";
const TWEETS_PER_SLIDE = 3;
const Board = ({ isLoading, tweets, currentPage, setPage }) => {
  if (isLoading) return <p>Loading ... </p>;

  const firstTweet = currentPage * TWEETS_PER_SLIDE;
  const lastTweet = (currentPage + 1) * TWEETS_PER_SLIDE;
  const tweetsToShow = tweets.slice(firstTweet, lastTweet);

  return (
    <>
      <>
        <button
          onClick={() => {
            if (firstTweet <= 0) return;
            else setPage(currentPage - 1);
          }}
        >
          left
        </button>
        <button
          onClick={() => {
            if (lastTweet >= tweets.length) return;
            else setPage(currentPage + 1);
          }}
        >
          right
        </button>
      </>
      {tweetsToShow.map((tweet) => (
        <div key={tweet._id}>
          <Tweet tweet={tweet} />
        </div>
      ))}
    </>
  );
};

export default Board;
