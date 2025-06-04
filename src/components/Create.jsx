import { v4 as uuidv4 } from "uuid";
function Create({ old, updated, setTweet, tweet }) {
  // function
  function hehe(e) {
    updated(e.target.value);
  }

  function submit(e) {
    e.preventDefault();
    setTweet([...tweet, { tweet: old, id: uuidv4() }]);
    updated("");
  }
  return (
    <form onSubmit={submit}>
      <textarea cols="50" rows="5" value={old} onChange={hehe}></textarea>
      <button onClick={submit}>post</button>
    </form>
  );
}

export default Create;
