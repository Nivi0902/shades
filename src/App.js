import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { useState } from 'react'

const App = () => {

  const [tasks,setTasks] = useState(JSON.parse(localStorage.getItem("todo-list")) || [])
  
    const handleCheck = (id) => {
      const lItems = tasks.map((task) => 
        task.id === id ? {...task,checked:!task.checked} : task
      )
      setTasks(lItems);
      localStorage.setItem("todo-list", JSON.stringify(lItems));

    }
  
    const handleDelete = (id) => {
      const deleteItem = tasks.filter((task) => 
        task.id !== id
      );
      setTasks(deleteItem)
      localStorage.setItem("todo-list", JSON.stringify(deleteItem));

    }

    const addItem = (task) => {
      const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
      const addNewTask = {id, task, checked:false}
      const listItem = [...tasks,addNewTask]
      setTasks(listItem)
      localStorage.setItem("todo-list", JSON.stringify(listItem));

    }
    
  const [newTask,setNewTask] = useState('')
    
    const handleSubmit = (e) => {
      e.preventDefault();
      addItem(newTask);
      setNewTask('')
    }
    

  return (
    <div className='app'>
      <Header title="Nivi's task"/>
      <Content
      tasks = {tasks}
      handleCheck ={handleCheck}
      handleDelete ={handleDelete}
      handleSubmit = {handleSubmit}
      newTask = {newTask}
      setNewTask = {setNewTask}
      />
      <Footer/>
    </div>
  )
}

export default App