import React, { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "./PostForm";
import Board from "./Board";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [allTweets, setAllTweets] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/api/tweets/all").then((response) => {
      setAllTweets(response.data);
      setLoading(false);
    });
  }, []);

  const addTweet = (tweet) => {
    setAllTweets([tweet, ...allTweets]);
  };

  return (
    <>
      <h1>This is not Twitter.</h1>
      <PostForm />
      <Board isLoading={isLoading} allTweets={allTweets} />
    </>
  );
};

export default App;
