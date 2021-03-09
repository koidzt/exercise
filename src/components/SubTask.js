import React from 'react';

function SubTask({ task, i, subTask, j, data, setData }) {
  const editIsDone = () => {
    const updateSubTask = { ...subTask, isDone: !subTask.isDone };
    let newData = [...data];
    newData[i] = { ...task };
    newData[i].task = [...task.task];
    newData[i].task[j] = updateSubTask;
    newData[i].isAllDone = newData[i].task.find((subTask) => !subTask.isDone) ? false : true;
    setData(newData);
  };

  const deleteSubTask = () => {
    const newTask = task.task.filter((item) => item !== subTask);
    let newData = [...data];
    newData[i] = { ...task };
    newData[i].task = [...newTask];
    setData(newData);
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <div>
        {subTask.isDone ? (
          <button className="btn btn-outline-secondary btn-sm me-2" onClick={editIsDone}>
            Undo
          </button>
        ) : (
          <button className="btn btn-outline-secondary btn-sm me-2" onClick={editIsDone}>
            Done
          </button>
        )}
        <span className={subTask.isDone ? 'text-decoration-line-through' : null}>{subTask.name}</span>
      </div>
      <div>
        <button className="btn btn-danger btn-sm" onClick={deleteSubTask}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default SubTask;
