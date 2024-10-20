import React, {useState, useContext } from 'react'
import { TodoContext } from './TodosContext';





const Newtodos = () => {

  const [newTodo,SetNewTodo]= useState("");
  const {todos, SetTodos } = useContext(TodoContext);

  const handelInput = (e) => {
    SetNewTodo(e.target.value);
  }


  const handelSubmits = (e) => {
    e.preventDefault();
    const newTodolist = {id:new Date().getTime().toString(), title: newTodo};
    SetTodos([...todos,newTodolist]);
    SetNewTodo("");

  }
  
  return (
    <div>
      <form onSubmit={handelSubmits} className='flex items-center justify-center w-full' >
        <input onChange={handelInput} value={newTodo} className='pl-3 w-64 bg-indigo-950  border border-[#4F46E5] outline-none h-8 ' type="text" name='todo'  placeholder='Enter your Todos' />
        <button className='pt-[0.25rem] pb-[0.25rem] pl-2 pr-2  text-center bg-indigo-600' type='submit'> Add Task </button>

      </form>
    </div>
  )
}

export default Newtodos
