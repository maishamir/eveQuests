import React from "react";
import "./Quest.scss";

function Quest({ task, priority }) {
  return (
    <div className="quest">
      <p className="quest__task">{task}</p>
      <button className="quest__whimsify">whim</button>
      <input type="checkbox"  />
    </div>
  );
}

export default Quest;
