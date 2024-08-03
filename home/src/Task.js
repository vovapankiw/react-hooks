import { useState, useEffect } from "react";
import uuid from "uuid/v4";

const TASK_STORAGE_KEY = "TASK_STORAGE_KEY";

const storeTasks = (taskMap) => {
  localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(taskMap));
};

const readStoreTask = () => {
  const taskMap = JSON.parse(localStorage.getItem(TASK_STORAGE_KEY));
  return taskMap ? taskMap : { tasks: [], completedTasks: [] };
};

export default function Task() {
  const storeTask = readStoreTask();
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState(storeTask.tasks);
  const [completedTasks, setCompletedTasks] = useState(
    storeTask.completedTasks
  );

  useEffect(() => {
    storeTasks({ tasks, completedTasks });
  });

  const updateTaskText = (event) => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, { taskText, id: uuid() }]);
  };

  const completeTask = (compelteTask) => {
    setCompletedTasks([...completedTasks, compelteTask]);
    setTasks(tasks.filter((task) => task.id !== compelteTask.id));
  };

  const deleteTask = (deletedTask) => {
    setCompletedTasks(
      completedTasks.filter((task) => task.id !== deletedTask.id)
    );
  };

  console.log(tasks);
  return (
    <div>
      <h3>Tasks</h3>
      <div className="form">
        <input value={taskText} onChange={updateTaskText} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task) => {
          const { id, taskText } = task;

          return (
            <div key={id} onClick={() => completeTask(task)}>
              {taskText}
            </div>
          );
        })}
      </div>
      <div className="completed-list">
        {completedTasks.map((task) => {
          const { id, taskText } = task;

          return (
            <div key={id}>
              {taskText}{" "}
              <span onClick={() => deleteTask(task)} className="delete-task">
                x
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
