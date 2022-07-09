import React, { useEffect, useState } from "react";
import Tweet from "./Tweet";
import axios from "axios";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [allTweets, setAllTweets] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/api/tweets/all").then((response) => {
      setAllTweets(response.data);
      setLoading(false);
    });
  }, []);

  const showTweets = () => {
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

  return (
    <>
      <h1>This is not Twitter.</h1>

      <div>{showTweets()}</div>
    </>
  );
};

export default App;
