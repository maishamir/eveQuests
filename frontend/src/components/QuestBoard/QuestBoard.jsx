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

  // TODO: create function that deletes correct task
  function deleteTask(questId) {
    // TODO: create a copy of the task array WITHOUT the selected task with questId
    let remainingTasks = tasks.filter(task => task.questId !== questId)
    setTasks(remainingTasks)
    
  }


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
    setTasks([...tasks, { task: e.target.task.value, isChecked: false, questId: uuidv4() }] );
  }

  return (
    <div className="questBoard__container">
      <div className="questBoard">
        <div className="questBoard__quests">
          {/* {tasks.length > 0 && tasks.map((task) => {
            return (
              <Quest task={task.task} key={task.questId} checkTask={completeTask} deleteTask={deleteTask} questId={task.questId} isChecked={task.isChecked} />
            );
          })} */}

          {
            tasks.length > 0 ? tasks.map((task => {
              return <Quest task={task.task} key={task.questId} checkTask={completeTask} deleteTask={deleteTask} questId={task.questId} isChecked={task.isChecked} />
            })) : <h1>You've completed all your quests today!</h1>
          }
          
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
