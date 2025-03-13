import React from "react";
import "./Quest.scss";

function Quest({ task, priority, checkTask, deleteTask, questId, isChecked }) {
  // TODO: add checkbox and set 'checked' state from prop
  // TODO: on click, call function from QuestBoard and update state

  return (
    <div className="quest">
      <p className={`quest__task ${isChecked ? `quest__complete` : ``}`}>
        {task}
      </p>
      <div className="quest__buttons">
        <button className="quest__buttons--whimsify">whim</button>
        <button className="quest__buttons--delete" onClick={() => deleteTask(questId)}>X</button>
        <input type="checkbox" className="quest__buttons--complete" checked={isChecked} onClick={() => checkTask(questId)} />
      </div>
    </div>
  );
}

export default Quest;
