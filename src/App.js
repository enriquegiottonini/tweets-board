import React, { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "./PostForm";
import Board from "./Board";

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
      <nav className=" navbar navbar-toggleable-md fixed-top"></nav>

      <div className="container-fluid main-content">
        <div className="row-fluid profile-background">
          <div className="container">
            <h1 className="title">This is not Twitter.</h1>
          </div>

          <nav className="navbar profile-stats ">
            <div className="container">whitespace</div>
          </nav>

          <div className="span3">
            <div className="well sidebar-nav">
              <PostForm setTweetsState={addTweet} />
            </div>
          </div>

          <div className="span9">
            <Board
              isLoading={isLoading}
              tweets={allTweets}
              currentPage={currentPage}
              setPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
