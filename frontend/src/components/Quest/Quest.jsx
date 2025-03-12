import React from "react";
import "./Quest.scss";

function Quest({ task, priority, checkTask, questId, isChecked}) {

  // TODO: add checkbox and set 'checked' state from prop
  // TODO: on click, call function from QuestBoard and update state

  return (
    <div className="quest">
      <p className={`quest__task ${isChecked ? `quest__complete` : ``}` }>{task}</p>
      <button className="quest__whimsify">whim</button>
      <input type="checkbox" onClick={() => checkTask(questId)} />
    </div>
  );
}

export default Quest;
