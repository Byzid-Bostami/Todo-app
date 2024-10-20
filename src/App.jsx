import { useState } from 'react';
import DisplayTodos from './DisplayTodos';
import { TodoContext } from './TodosContext';
import Newtodos from './Newtodos';

function App() {
  const [todos, SetTodos] = useState([])
   

  return (
    <TodoContext.Provider value={{ todos, SetTodos }}>
      <div className='flex flex-col items-center justify-center h-screen text-center bg-indigo-600 '>
      <div className='box-border flex flex-col w-[400px] p-8 space-y-5 text-white rounded-md shadow-md bg-indigo-950'>
        <h1 className='font-serif text-2xl font-bold text-center '>
          Get Things Done!
        </h1>
        <Newtodos />
        <DisplayTodos />
      </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
