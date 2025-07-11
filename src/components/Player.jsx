import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Player() {
  return (
    <div>
      <div>
        <p>start time</p>
        <input type="range" />
        <p>end time</p>
      </div>
      <div></div>
    </div>
  );
}

export default Player;
