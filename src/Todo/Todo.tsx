import React from 'react'
import { ACTIONS, todosType } from '../App'
import { AiFillDelete } from 'react-icons/ai'
import { BiCheckbox, BiCheckboxChecked } from 'react-icons/bi'

interface Props {
  todo: todosType,
  dispatch: React.Dispatch<{ type: string, payload: any }>
}
export default function Todo(props: Props) {
  const { todo, dispatch } = props;

  return (
    <div className='flex gap-3 justify-between bg-orange-100 p-2 my-3 rounded-md'>
      <span 
        style={{ color: todo.complete ? "#AAA" : "#000" }}
        className='flex items-center capitalize truncate hover:whitespace-normal'
      >
        {todo.name}
      </span>

      <div className='flex items-center' >
        {
          todo.complete ?
            <BiCheckboxChecked
              onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}
              className='cursor-pointer'
              {...{ size: 20 }}
            /> : 
            <BiCheckbox 
              onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })} 
              className='cursor-pointer'
              {...{ size: 20 }}
            />
        }

        <AiFillDelete
          className='cursor-pointer'
          onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}
          {...{ size: 17 }}
        />
      </div>
    </div>
  )
}
