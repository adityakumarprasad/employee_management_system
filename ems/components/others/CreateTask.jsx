import React from 'react'
import AuthProvider, { AuthContext } from '../../context/AuthProvider'




const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')
  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

    return (
      <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className='flex flex-wrap w-full items-start justify-between'>

          <div> <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" /></div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3><input
              value={asignTo}
              onChange={(e) => {
                setAsignTo(e.target.value)
              }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' /></div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' /></div>
        </form >
      </div >
    )
  }

  export default CreateTask
