function Tweet({ name, setTweet }) {
  function remove() {
    console.log(name);
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={remove}>delete</button>
    </div>
  );
}
export default Tweet;
