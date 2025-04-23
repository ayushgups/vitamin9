import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch({ type: 'DELETE_TASK', payload: index });
  };

  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between">
          {task}
          <button className="btn btn-sm btn-danger" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
