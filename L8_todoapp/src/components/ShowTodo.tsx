import React from 'react'
import { Card, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button';

type todoListProps = {
    todos: { id: number, item: string }[];
}

type todo = {id: number, item: string}

const ShowTodo: React.FC<todoListProps> = ({ todos, setTodos }: todoListProps) => {

    const handleRemoveTodo = (todoId: number) =>{
        setTodos((prev: todo[]) => prev.filter((todo: todo) => todo.id !== todoId))
    }

    return (
        <div>
            {todos.map(todo => {
                return (
                    <Card key={todo.id} className='mt-4'>
                        <CardHeader className='flex justify-between items-center'>
                            <CardTitle>{todo.item}</CardTitle>
                            <Button className='text-sm' onClick={() => handleRemoveTodo(todo.id)}>❌</Button>
                        </CardHeader>
                    </Card>
                )
            })}
        </div>
    )
}

export default ShowTodo
