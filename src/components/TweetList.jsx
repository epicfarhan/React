import Tweet from "./Tweet";

function TweetList({ tweet, setTweet }) {
  return (
    <div className="tweetlist">
      {tweet.map((item) => (
        <Tweet name={item} />
      ))}
    </div>
  );
}

export default TweetList;
