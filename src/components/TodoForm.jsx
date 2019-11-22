import React from 'react';
import TextField from '@material-ui/core/TextField';

// const formSubmit = (event) => (saveTodo) => {
//   console.log({ event, saveTodo })
//   event.preventDefault();
//   saveTodo(value)
// }

const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState('');

  return <form
      onSubmit={(event) => {
        // TODO move this function out of inline and up above
        event.preventDefault();
        saveTodo(value);
      }}
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
