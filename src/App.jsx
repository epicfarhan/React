function App() {
  const posts = [
    { id: 1, text: "hello world" },
    { id: 2, text: "idk" },
    { id: 3, text: "someone" },
  ];

  return (
    <>
      {posts.map((comment, index) => (
        <h1 key={index}>{comment.text}</h1>
      ))}
    </>
  );
}

export default App;
