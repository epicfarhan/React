import Tweet from "./Tweet";

function TweetList({ tweet, setTweet }) {
  return (
    <div className="tweetlist">
      {tweet.map((item) => (
        <Tweet name={item} tweets={tweet} setTweet={setTweet} key={item.id} />
      ))}
    </div>
  );
}

export default TweetList;
