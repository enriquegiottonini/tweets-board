import React from "react";
import Tweet from "./Tweet";

let tweetsExample = [
  {
    _id: "62c8a0248b1b838039278f0a",
    date: "2022-07-08T21:22:44.674Z",
    author: "admin",
    text: "INSOMNIA",
    likes: 0,
    dislikes: 0,
    __v: 0,
  },
  {
    _id: "62c8bf657707d97e10dca3aa",
    date: "2022-07-08T23:36:05.690Z",
    author: "admin",
    text: "Hello motto",
    likes: 13,
    dislikes: 76,
    __v: 0,
  },
];

const App = () => {
  return (
    <>
      <h1>This is not Twitter.</h1>
      <Tweet tweet={tweetsExample[0]} />
    </>
  );
};

export default App;
