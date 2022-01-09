// we need useState and useEffect hooks
import React,{useState,useEffect} from 'react'

// icons from react icons kit
// main Icon component
import { Icon } from 'react-icons-kit'

// icons themselves
import {plus} from 'react-icons-kit/feather/plus'
import {edit2} from 'react-icons-kit/feather/edit2'
import {trash} from 'react-icons-kit/feather/trash'

// get todos from local storage
const getTodosFromLS=()=>{
  const data = localStorage.getItem('Todos');
  if(data){
    return JSON.parse(data)
  }
  else{
    return []
  }
}

export const Form = () => {

  // todo value state
  const [todoValue, setTodoValue]=useState('');

  // todos array of objects
  const [todos, setTodos]=useState(getTodosFromLS());
  // console.log(todos);

  // form submit event
  const handleSubmit=(e)=>{
    e.preventDefault();

    // creating a ID for every todo
    const date = new Date();
    const time = date.getTime();

    // creating a todo object
    let todoObject={
      ID: time,
      TodoValue: todoValue,
      completed: false
    }
    // updating todos state
    setTodos([...todos, todoObject]);
    // clearing input field
    setTodoValue('');
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('Todos', JSON.stringify(todos));
  },[todos]) // useEffect will run whenever our todos state changes

    return (
        <>
          {/* form component */}
            <div className="form">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="input-and-button">
                  <input type='text' placeholder="Add an Item" required
                  onChange={(e)=>setTodoValue(e.target.value)} value={todoValue}/>
                  <div className='button'>
                    <button type="submit">
                      <Icon icon={plus} size={20}/>
                    </button>
                  </div>
                </div>
              </form>

              {/* start of rendering todos if we have todos.length > 0 */}
              {todos.length>0&&(
                <>
                  {todos.map((individualTodo,index)=>(
                    <div className='todo' key={individualTodo.ID}>

                      {/* checkbox and value div   */}
                      <div>
                        <input type='checkbox'/>
                        <span>{individualTodo.TodoValue}</span>
                      </div>

                      {/* edit and delete icon div */}
                      <div className='edit-and-delete'>
                        <div style={{marginRight:7+'px'}}>
                          <Icon icon={edit2} size={18}/>
                        </div>
                        <div>
                          <Icon icon={trash} size={18}/>
                        </div>
                      </div>

                    </div>
                  ))}
                </>
              )}

            </div>
          {/* end of form component */}
        </>
    )
}