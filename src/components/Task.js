import React, { useState } from 'react';
import SubTask from './SubTask';

function Task({ task, i, data, setData }) {
  const [subTask, setSubTask] = useState();

  const duplicateTask = () => {
    const duplicate = { ...task };

    const newData = [...data, duplicate];
    setData(newData);
  };

  const handleChangeSubTask = (event) => {
    const value = event.target.value;
    // console.log(value);
    setSubTask(value);
  };

  const addSubTask = (event) => {
    event.preventDefault();

    if (!subTask) return alert('Please enter sub-task');
    const newSubTask = { name: subTask, isDone: false };
    const targetTask = { ...task, task: [...task.task, newSubTask] };
    let newData = [...data];
    newData[i] = targetTask;
    setData(newData);

    setSubTask('');
  };

  const deleteTask = () => {
    const newData = data.filter((item) => item !== task);

    setData(newData);
  };

  return (
    <div className="container">
      <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-secondary btn-sm me-2" onClick={duplicateTask}>
              Duplicate
            </button>
            <h5 className={task.isAllDone ? 'text-decoration-line-through me-2' : 'me-2'}>{task.name}</h5>
          </div>
          <div className="d-flex">
            <button className="btn btn-danger btn-sm" onClick={deleteTask}>
              Delete
            </button>
          </div>
        </div>
        <div className="d-flex">
          <form className="my-2 input-group" onSubmit={addSubTask}>
            <input className="form-control" value={subTask} onChange={handleChangeSubTask} placeholder="sub-Task" />
            <button className="btn btn-primary">Add</button>
          </form>
        </div>

        <ul className="list-group list-group-flush">
          {task.task.map((subTask, j) => (
            <SubTask
              key={`${task.name}-sub-task-${j}`}
              task={task}
              i={i}
              subTask={subTask}
              j={j}
              data={data}
              setData={setData}
            />
          ))}
        </ul>
      </li>
    </div>
  );
}

export default Task;
