import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";
import feedbackdata from "./data/feedbackdata";
import Feedbackform from "./components/Feedbackform";

function App() {
  const [feedback, updatedFeedback] = useState(feedbackdata);
  const deleteFeedback = (id) => {
    if (window.confirm("sure you want to delete?"))
      updatedFeedback(feedback.filter((item) => item.id !== id));
  };

  const addFeedback = (newfeedback) => {
    newfeedback.id = uuidv4();
    console.log(newfeedback);
    updatedFeedback([...feedback, newfeedback]);
  };
  return (
    <>
      <Header data={feedback} />
      <Feedbackform handleAdd={addFeedback} />
      <FeedbackItem data={feedback} handleDelete={deleteFeedback} />
    </>
  );
}

export default App;
