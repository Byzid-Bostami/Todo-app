import React, { useContext } from 'react';
import { TodoContext } from './TodosContext';
import { FaRegTrashAlt } from "react-icons/fa";


const DisplayTodos = () => {
  const { todos, SetTodos } = useContext(TodoContext);

  const deleteTodo = (id) => {
    const updatedList = todos.filter((todo) => todo.id !== id);
    SetTodos(updatedList)
  }

  return (
    <>
      {todos.map((todo) => (

        <div className='flex justify-between px-3 py-1 bg-indigo-600 rounded-md' key={todo.id} >
          <h1 className='capitalize'  >{todo.title}</h1>
          <button onClick={() => deleteTodo(todo.id)} className=' hover:text-indigo-950'> <FaRegTrashAlt /> </button>
        </div>
        
      ))}
    </>
  );
};

export default DisplayTodos;
