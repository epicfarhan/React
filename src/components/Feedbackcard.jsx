import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

function Feedbackcard({ data, handleDelete }) {
  return (
    <Card>
      <div className="text-amber-50 text-[30px] font-bold">
        {data.rating}/10
      </div>
      <p className="text-[20px]">{data.text}</p>

      <button
        className="absolute right-[10px] top-[10px] cursor-pointer"
        onClick={() => handleDelete(data.id)}
      >
        <FaTimes color="#FF3F7F" fontSize="20px" />
      </button>
    </Card>
  );
}

export default Feedbackcard;
