import React, { useState, useContext } from 'react';
import AuthContext from '../../context/AuthProvider'

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };

    const updatedData = userData.map((elem) => {
      if (elem.firstName === asignTo) {
        return {
          ...elem,
          tasks: [...elem.tasks, task],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1
          }
        }
      }
      return elem;
    });

    setUserData(updatedData);

    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAsignTo('');
    setCategory('');
  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
      <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>

        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
            type="text"
            placeholder='Make a UI design'
          />
        </div>

        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
            placeholder='Describe the task'
          />
        </div>

        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
            type="date"
          />
        </div>

        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
          <input
            value={asignTo}
            onChange={(e) => setAsignTo(e.target.value)}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
            type="text"
            placeholder='employee name'
          />
        </div>

        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
            type="text"
            placeholder='design, dev, etc'
          />
        </div>

        <button type="submit" className='bg-emerald-600 text-white px-4 py-2 rounded mt-4'>
          Create Task
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
