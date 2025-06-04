function Tweet({ name, setTweet, tweets }) {
  function remove() {
    setTweet(tweets.filter((item) => item !== name));
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={remove}>delete</button>
    </div>
  );
}
export default Tweet;
