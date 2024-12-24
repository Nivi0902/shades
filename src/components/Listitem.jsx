import { MdDeleteOutline } from "react-icons/md";


const Listitem = ({tasks,handleCheck,handleDelete}) => {

  return (
    <ul>
      {tasks.map((task) => (
          <li className='item' key={task.id}>
          <input 
          type='checkbox' 
          checked={task.checked}
          onChange={() => handleCheck(task.id)}
          />
          <label>{task.task}</label>
          <button 
          onClick={() => handleDelete(task.id)}
          ><MdDeleteOutline /></button>
          </li>
      ))}
    </ul>
  )
}

export default Listitem