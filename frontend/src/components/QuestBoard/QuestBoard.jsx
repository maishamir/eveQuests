import React, { useState } from "react";
import Quest from "../Quest/Quest";
import "./QuestBoard.scss";
import { v4 as uuidv4 } from "uuid";

function QuestBoard() {

  const [questValue, setQuestValue] = useState("")

  // TODO: create function that updates isChecked state for correct task
  function completeTask(questId) {
    // TODO: toggle the isChecked value of the matching task
    let completedTask = tasks.map(task => {
     return  task.questId === questId ? {...task, isChecked: !task.isChecked} :  task
    })
    setTasks(completedTask)
  }


  // TODO: create function that changes the task's name to a WHIMSIFIED one (just add sparkle emojis around the name and uppercase it for now)
  function whimsifyTask(questId) {
    let whimsifiedTask = tasks.map(task => {
      return task.questId === questId ? {...task, task: `✨${task.task.toUpperCase()}✨`} : task
    })
    setTasks(whimsifiedTask)
  }
  
  function whimsifyInput(input) {
    setQuestValue(`✨${input.toUpperCase()}✨`)
  }

  // TODO: create function that deletes correct task
  function deleteTask(questId) {
    // TODO: create a copy of the task array WITHOUT the selected task with questId
    let remainingTasks = tasks.filter(task => task.questId !== questId)
    setTasks(remainingTasks)
    
  }

  function handleChange(e) {
    setQuestValue(e.target.value)
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
    setTasks([...tasks, { task: questValue, isChecked: false, questId: uuidv4() }])
    setQuestValue('')
  }

  return (
    <div className="questBoard__container">
      <div className="questBoard">
        <div className="questBoard__quests">
          {/* {tasks.length > 0 && tasks.map((task) => {
            return (
              <Quest task={task. task} key={task.questId} checkTask={completeTask} deleteTask={deleteTask} questId={task.questId} isChecked={task.isChecked} />
            );
          })} */}

          {
            tasks.length > 0 ? tasks.map((task => {
              return <Quest task={task.task} key={task.questId} checkTask={completeTask} deleteTask={deleteTask} questId={task.questId} isChecked={task.isChecked} whimsifyTask={whimsifyTask} />
            })) : <h1>You've completed all your quests today!</h1>
          }
          
        </div>

        <div className="questBoard__addTask">
          <input
            type="text"
            name="tasks"
            id="task"
            placeholder="Add task here"
            value={questValue}
            onChange={handleChange}
          />
          <button className="questBoard__button" onClick={() => addTask()}>Add</button>
          <button className="questBoard__button questBoard__button--whim" onClick={() => whimsifyInput(questValue)}>
            Whim
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestBoard;
