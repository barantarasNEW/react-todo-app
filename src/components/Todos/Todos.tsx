import {useState} from "react";
import {
  List,
  ListItem,
  IconButton,
  ListItemButton,
  ListItemText,
  Checkbox,
  ListItemIcon
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Todos = () => {
  const [todos, setTodos] = useState([{id: 1, value: 'T', isChecked: false}, {id: 2, value: 'TA', isChecked: true}]);

  const onToggle = (id: number) => () => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return {...todo, isChecked: !todo.isChecked};
      }

      return todo;
    }));
  };

  const onRemove = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const onEdit = (id: number) => {
    console.log(id);
  };

  return (
    <List dense>
      {todos.map(({id, value, isChecked}) => (
        <ListItem
          key={id}
          disablePadding
          secondaryAction={
            <>
              <IconButton edge="start" onClick={() => onEdit(id)}>
                <EditIcon />
              </IconButton>

              <IconButton edge="end" onClick={() => onRemove(id)}>
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          <ListItemButton role={undefined} onClick={onToggle(id)} dense>
            <ListItemIcon>
              <Checkbox edge="start" checked={isChecked}/>

            </ListItemIcon>
            <ListItemText id={value} primary={value} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default Todos;