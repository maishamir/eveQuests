import React, {useState} from "react";
import Quest from "../Quest/Quest";
import "./QuestBoard.scss";

function QuestBoard() {


  // TODO: use useState to store tasks
  const [tasks, setTasks] = useState(["Helloo this is the very first task!!", "This is the second task woohooo", "And this is the last one hehe"])
  // TODO: update the state when adding a task
  

  function addTask(e) {
    e.preventDefault();
    setTasks([...tasks, e.target.task.value])
  }  


  return (
    <div className="questBoard__container">
      <div className="questBoard">
        
        <div className="questBoard__quests">
        {/* TODO: render with .map() */}
          {
            tasks.map((quest, index) => {
              return <Quest key={index} task={quest} />
            })
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
          <button className="questBoard__button questBoard__button--whim">Whim</button>
        </form>
      </div>
    </div>
  );
}

export default QuestBoard;
