import React, { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "./PostForm";
import Board from "./Board";

const TWEETS_PER_SLIDE = 3;
const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [allTweets, setAllTweets] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    axios.get(`/api/tweets/all`).then((response) => {
      setAllTweets(response.data.reverse());
      setLoading(false);
    });
  }, []);

  const addTweet = (author, post) => {
    const newTweet = {
      date: new Date().toString(),
      author: author,
      text: post,
      likes: 0,
      dislikes: 0,
    };

    axios.post(`/api/add`, newTweet).then((response) => {
      if (response) setAllTweets([response.data, ...allTweets]);
    });
  };

  return (
    <>
      <h1>This is not Twitter.</h1>
      <PostForm setTweetsState={addTweet} />
      <Board
        isLoading={isLoading}
        tweets={allTweets}
        currentPage={currentPage}
        setPage={setCurrentPage}
      />
    </>
  );
};

export default App;
