import React from 'react'
import Inputbox from './Inputbox'
import Listitem from './Listitem'

const Content = ({tasks,handleCheck,handleDelete,handleSubmit,newTask,setNewTask}) => {
  return (
    <main>
      <Inputbox
            handleSubmit = {handleSubmit}
            newTask = {newTask}
            setNewTask = {setNewTask}
      />
      <Listitem
            tasks = {tasks}
            handleCheck ={handleCheck}
            handleDelete ={handleDelete}
            />
    </main>
  )
}

export default Content