import React from "react";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  showIncomplete,
  setTaskStatus,
  removeTask,
  setShowInComplete,
}) {
  return (
    <>
      <ul className="task-list">
        {tasks
          .filter((task) => (showIncomplete ? task.status !== 1 : true))
          .map((task) => (
            <TaskItem
              task={task}
              setTaskStatus={setTaskStatus}
              removeTask={removeTask}
            />
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="felter-label">
          Show incomplete tasks only
        </label>
        <input
          type="checkbox"
          id="filter"
          checked={showIncomplete}
          onChange={(e) => setShowInComplete(e.target.checked)}
        />
      </div>
    </>
  );
}

export default TaskList;
