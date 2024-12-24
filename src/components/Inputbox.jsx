import { FaPlus } from 'react-icons/fa'

const Inputbox = ({handleSubmit,newTask,setNewTask}) => {

  return (
    <form id='addForm' onSubmit={handleSubmit}> 
      <input
      id='addtaskinput' 
      autoFocus
      type='text'
      placeholder='Add task'
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      required/>
      <button 
      type='submit'
      className='submitbtn'><FaPlus/></button>
    </form>
  )
}

export default Inputbox