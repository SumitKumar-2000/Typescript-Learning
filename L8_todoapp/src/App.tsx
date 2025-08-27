import React from 'react';
import "@/App.css";
import AddTodo from './components/AddTodo';
import ShowTodo from './components/ShowTodo';

type todo = {
  id: number;
  item: string;
}

function App() {
  const [todos, setTodos] = React.useState<todo[]>([{id: Date.now(), item: "Complete course"}]);

  return (
    <main>
      <AddTodo setTodos={setTodos}/>
      <ShowTodo todos={todos} setTodos={setTodos}/>
    </main>
  )
}

export default App
