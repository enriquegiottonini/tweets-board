import React from "react";
import Tweet from "./Tweet";
const TWEETS_PER_SLIDE = 5;
const Board = ({ isLoading, tweets, currentPage, setPage }) => {
  if (isLoading) return <p>Loading ... </p>;

  const firstTweet = currentPage * TWEETS_PER_SLIDE;
  const lastTweet = (currentPage + 1) * TWEETS_PER_SLIDE;
  const tweetsToShow = tweets.slice(firstTweet, lastTweet);

  return (
    <div>
      <div>
        <div className="move-buttons">
          <button
            className="move"
            onClick={() => {
              if (firstTweet <= 0) return;
              else setPage(currentPage - 1);
            }}
          >
            <i className="fa-regular fa-circle-left"></i>
          </button>
          <button
            className="move"
            onClick={() => {
              if (lastTweet >= tweets.length) return;
              else setPage(currentPage + 1);
            }}
          >
            <i className="fa-regular fa-circle-right"></i>
          </button>
        </div>
        <div className="tweet-list">
          {tweetsToShow.map((tweet) => (
            <div key={tweet._id}>
              <Tweet tweet={tweet} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
