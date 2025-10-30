import { useState } from "react";

function Rating({ rate }) {
  const [selected, update] = useState(10);

  function handleClick(e) {
    update(+e.target.value);
    rate(+e.target.value);
  }
  return (
    <ul className="flex">
      <li className="w-[70px] h-[70px] relative">
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleClick}
          checked={selected === 1}
          className="w-full h-full"
        />
        <label
          htmlFor="num1"
          className="absolute text-[35px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          1
        </label>
      </li>

      <li className="w-[70px] h-[70px] relative">
        <input
          type="radio"
          id="num2"
          name="rating"
          value="2"
          onChange={handleClick}
          checked={selected === 2}
          className="w-full h-full"
        />
        <label
          htmlFor="num2"
          className="absolute text-[35px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          2
        </label>
      </li>

      <li className="w-[70px] h-[70px] relative">
        <input
          type="radio"
          id="num3"
          name="rating"
          value="3"
          onChange={handleClick}
          checked={selected === 3}
          className="w-full h-full"
        />
        <label
          htmlFor="num3"
          className="absolute text-[35px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          3
        </label>
      </li>
      <li className="w-[70px] h-[70px] relative">
        <input
          type="radio"
          id="num4"
          name="rating"
          value="4"
          onChange={handleClick}
          checked={selected === 4}
          className="w-full h-full"
        />
        <label
          htmlFor="num4"
          className="absolute text-[35px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          4
        </label>
      </li>
      <li className="w-[70px] h-[70px] relative">
        <input
          type="radio"
          id="num5"
          name="rating"
          value="5"
          onChange={handleClick}
          checked={selected === 5}
          className="w-full h-full"
        />
        <label
          htmlFor="num5"
          className="absolute text-[35px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          5
        </label>
      </li>
      <li className="w-[70px] h-[70px] relative">
        <input
          type="radio"
          id="num6"
          name="rating"
          value="6"
          onChange={handleClick}
          checked={selected === 6}
          className="w-full h-full"
        />
        <label
          htmlFor="num6"
          className="absolute text-[35px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          6
        </label>
      </li>
      <li className="w-[70px] h-[70px] relative">
        <input
          type="radio"
          id="num7"
          name="rating"
          value="7"
          onChange={handleClick}
          checked={selected === 7}
          className="w-full h-full"
        />
        <label
          htmlFor="num7"
          className="absolute text-[35px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          7
        </label>
      </li>

      <li className="w-[70px] h-[70px] relative">
        <input
          type="radio"
          id="num8"
          name="rating"
          value="8"
          onChange={handleClick}
          checked={selected === 8}
          className="w-full h-full"
        />
        <label
          htmlFor="num8"
          className="absolute text-[35px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          8
        </label>
      </li>
      <li className="w-[70px] h-[70px] relative">
        <input
          type="radio"
          id="num9"
          name="rating"
          value="9"
          onChange={handleClick}
          checked={selected === 9}
          className="w-full h-full"
        />
        <label
          htmlFor="num9"
          className="absolute text-[35px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          9
        </label>
      </li>
      <li className="w-[70px] h-[70px] relative">
        <input
          type="radio"
          id="num10"
          name="rating"
          value="10"
          onChange={handleClick}
          checked={selected === 10}
          className="w-full h-full"
        />
        <label
          htmlFor="num10"
          className="absolute text-[35px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          10
        </label>
      </li>
    </ul>
  );
}

export default Rating;
