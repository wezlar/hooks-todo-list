import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from '../useInputState';

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState('');

  const formSubmit = ({ value }) => (event) => {
    event.preventDefault();
    saveTodo(value);
    reset();
  }

  return <form
      onSubmit={formSubmit({ value })}
    >
    <TextField
      variant="outlined"
      placeholder="Add todo" 
      margin="normal"
      onChange={onChange}
      value={value}
    />
  </form>
}

export default TodoForm;
