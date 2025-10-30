import { useState } from "react";
import Button from "./shared/Button";
import Rating from "./Rating";

function Feedbackform({ handleAdd }) {
  const [text, update] = useState("");

  const [disabled, changeBtnState] = useState(true);
  const [rating, setRating] = useState(10);
  const [minimum, updateMin] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      changeBtnState(true);
    } else if (text !== "" && text.trim().length <= 10) {
      updateMin("Text must be at least 10 characters");
      changeBtnState(true);
    } else {
      updateMin(null);
      changeBtnState(false);
    }
    update(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (text.trim().length > 10 && text !== "") {
      const newFeedback = {
        text,
        rating,
      };

      handleAdd(newFeedback);
      update("");
    }
  };
  return (
    <div className="m-auto w-[500px] pt-[100px]">
      <form onSubmit={handleClick}>
        <h2 className="text-[40px] font-bold pb-3">Drop a review!</h2>
        <Rating rate={(num) => setRating(num)} />
        <div>
          <input
            type="text"
            placeholder="your review"
            className="w-[100%] border-4 border-gray-200 bg-gray-200 h-[60px] pl-3 rounded-2xl mb-5"
            onChange={handleTextChange}
            value={text}
          />
          <p className="text-red-500 font-bold">{minimum}</p>

          <Button type="submit" disable={disabled}>
            <p className="text-[17px] font-bold text-white ">send</p>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Feedbackform;
