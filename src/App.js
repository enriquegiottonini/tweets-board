import React, { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "./PostForm";
import Board from "./Board";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [allTweets, setAllTweets] = useState();

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
      <Board isLoading={isLoading} allTweets={allTweets} />
    </>
  );
};

export default App;
