import React from 'react'
import styles from '../../styles/Todos.module.css'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  todos: Todo[];
}

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await data.json();
  return {
    props: { todos },
  }
}

export default function Todos({ todos }: Props) {
  return (
    <>
      <h1>Tarefas para fazer</h1>
      <ul className={styles.todolist}>
        {todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </>
  )
}
