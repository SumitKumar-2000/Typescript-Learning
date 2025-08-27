import React, { type ChangeEvent } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const AddTodo: React.FC<> = ({setTodos}) => {

  const [currTodo, setCurrTodo] = React.useState<string>("")
  const wrongTodoItemCondition = !currTodo || currTodo.length <= 1;

  const handleAddTodo = React.useCallback(() =>{
     if(wrongTodoItemCondition) return;   

     setTodos(prev => [...prev, {item: currTodo, id: Date.now()}]);
     setCurrTodo("");   
  },[currTodo, setTodos, wrongTodoItemCondition])
  
  return (
    <div className='flex gap-2'>
      <Input type="text" name="todo" id="todo" className='w-[200px]' placeholder='write your todo...' value={currTodo} onChange={(e:ChangeEvent<HTMLInputElement>) => setCurrTodo(e.target.value)}/>
      <Button type="button" onClick={handleAddTodo} disabled={wrongTodoItemCondition}>ADD</Button>
    </div>
  )
}

export default AddTodo
