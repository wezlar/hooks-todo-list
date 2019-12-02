import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState('');

  const formSubmit = ({ value }) => (event) => {
    event.preventDefault();
    saveTodo(value);
    setValue('');
  }

  return <form
      onSubmit={formSubmit({ value })}
    >
    <TextField
      variant="outlined"
      placeholder="Add todo" 
      margin="normal"
      onChange={(event) => {
        setValue(event.target.value)
      }}
      value={value}
    />
  </form>
}

export default TodoForm;
