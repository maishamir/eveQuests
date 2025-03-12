import React, { useState } from "react";
import Quest from "../Quest/Quest";
import "./QuestBoard.scss";
import { v4 as uuidv4 } from "uuid";

function QuestBoard() {
  // TODO: create function that updates isChecked state for correct task
  function completeTask(questId) {
    // TODO: toggle the isChecked value of the matching task
    let completedTask = tasks.map(task => {
     return  task.questId === questId ? {...task, isChecked: !task.isChecked} :  task
    })
    setTasks(completedTask)
  }
  // TODO: pass function as prop to each component


  // TODO: use useState to store tasks
  const [tasks, setTasks] = useState([
    {
      task: "Helloo this is the very first task!!",
      isChecked: false,
      questId: uuidv4(),
    },
    {
      task: "This is the second task woohooo",
      isChecked: false,
      questId: uuidv4(),
    },
    {
      task: "And this is the last one hehe",
      isChecked: false,
      questId: uuidv4(),
    },
  ]);

  // TODO: update the state when adding a task
  function addTask(e) {
    e.preventDefault();
    setTasks([...tasks, e.target.task.value]);
  }

  return (
    <div className="questBoard__container">
      <div className="questBoard">
        <div className="questBoard__quests">
          {tasks.map((task) => {
            return (
              <Quest task={task.task} key={task.questId} checkTask={completeTask} questId={task.questId} isChecked={task.isChecked} />
            );
          })}
        </div>

        <form className="questBoard__addTask" onSubmit={addTask}>
          <input
            type="text"
            name="tasks"
            id="task"
            placeholder="Add task here"
          />
          <button className="questBoard__button">Add</button>
          <button className="questBoard__button questBoard__button--whim">
            Whim
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuestBoard;
