import './App.css';
import { useState } from 'react';
import Task from './components/Task';

function App() {
  const [task, setTask] = useState('');
  const [data, setData] = useState([
    {
      name: 'Task',
      isAllDone: false,
      task: [
        {
          name: 'sub-Task1',
          isDone: false,
        },
        {
          name: 'sub-Task2',
          isDone: false,
        },
      ],
    },
  ]);

  const handleChangeTask = (event) => {
    const value = event.target.value;
    // console.log(value);
    setTask(value);
  };

  const createTask = (event) => {
    event.preventDefault();
    if (!task) return alert('Please enter Task');

    const newTask = {
      name: task,
      isAllDone: false,
      task: [],
    };

    const newData = [...data, newTask];
    setData(newData);
    setTask('');
  };

  // console.log('current data =>', data);

  return (
    <div className="App">
      <div className="container">
        <form className="my-2 input-group" onSubmit={createTask}>
          <input className="form-control" value={task} onChange={handleChangeTask} placeholder="Task" />
          <button className="btn btn-primary" type="submit">
            Create
          </button>
        </form>

        <ul className="list-group list-group-flush">
          {data &&
            data.map((item, i) => <Task key={`task-list-${i}`} task={item} i={i} data={data} setData={setData} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
