function Tweet({ name, setTweet, tweets }) {
  function remove() {
    setTweet(tweets.filter((item) => item.id !== name.id));
  }

  return (
    <div>
      <h1>{name.tweet}</h1>
      <button onClick={remove}>delete</button>
    </div>
  );
}
export default Tweet;
