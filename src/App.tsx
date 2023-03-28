import React, { useReducer, useRef, useState } from 'react';
import Todo from './Todo/Todo';


export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
}

export interface todosType {
  name: string,
  id: number,
  complete: boolean
}

function reducer(todos: todosType[], action: { type: string, payload: any }) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo;
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);
    default:
      return todos;

  }
}

function newTodo(name: string) {
  return { id: Date.now(), name: name, complete: false }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');
  const inputReference = useRef<any>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
    inputReference.current.focus();
  }

  return (
    <section className='bg-gray-100 py-10 min-h-screen' >
      <div className='container mx-auto bg-gray-300 max-w-2xl p-5 min-h-1/2 rounded-lg'>
        <h1 className='font-semibold mb-3 text-center'> Todo List </h1>
        <div>
          <div >
            <form onSubmit={handleSubmit} className='flex justify-between mb-3 gap-3'>
              <div className='flex bg-white rounded-lg p-2 align-middle w-full'>
                <label htmlFor='name' className='leading-6'>Name:</label>
                <input
                  autoFocus
                  ref={inputReference}
                  id='name'
                  required
                  type='text'
                  className='ml-2 w-full focus:outline-none'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <button className='bg-gray-900 text-white p-2 rounded-lg' type='submit'>
                +
              </button>
            </form>
          </div>

          {
            todos.map(todo => <Todo todo={todo} key={todo.id} dispatch={dispatch} />)
          }

        </div>
      </div>
    </section>
  );
}

export default App;
