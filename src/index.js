import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      
      <TodoForm saveTodo={(todoText) => {
        const trimmedText = todoText.trim();

        if (trimmedText.length > 0) {
          setTodos([...todos, trimmedText]);
        }
      }} />
      <TodoList todos={todos} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);