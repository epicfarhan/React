import { useState } from "react";
import Create from "./components/Create";
import TweetList from "./components/TweetList";

function App() {
  // state
  const [old, updated] = useState("");
  const [tweet, setTweet] = useState([]);

  return (
    <>
      <Create old={old} updated={updated} tweet={tweet} setTweet={setTweet} />
      <TweetList tweet={tweet} setTweet={setTweet} />
    </>
  );
}

export default App;
