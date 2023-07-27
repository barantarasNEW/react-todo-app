import {StyledListItem, StyledListItemIcon, StyledTextField} from "./Styles";
import {Checkbox, IconButton} from "@mui/material";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {useAppSelector} from "../../redux/hooks";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {Todo as TodoType} from '../../types/todo';
import {removeTodo, toggleTodo, updateTodo} from "../../redux/slices/todosSlice";

type Props = {
  todo: TodoType;
};

const Todo: React.FC<Props> = ({todo: {id, value, isChecked}}) => {
  const [todoValue, setTodoValue] = useState(value);
  const [isEdit, setIsEdit] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onToggle = () => () => {
    dispatch(toggleTodo(id));
  };

  const onRemove = () => {
    dispatch(removeTodo(id));
  };

  const onIsEditToggle = () => {
    setIsEdit(prev => !prev);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.target.value);
  };

  const onBlur = () => {
    dispatch(updateTodo({id, todoValue}));
    onIsEditToggle();
  };

  useEffect(() => {
    if (isEdit) {
      ref.current?.focus();
    }
  }, [isEdit]);

  return (
    <StyledListItem disablePadding>
      <StyledListItemIcon>
        <Checkbox checked={isChecked} onChange={onToggle()}  />
      </StyledListItemIcon>

      <StyledTextField
        size="small"
        value={todoValue}
        onChange={onChange}
        onBlur={() => onBlur()}
        fullWidth
        multiline
        checked={isChecked}
        inputRef={ref}
        spellCheck={false}
        disabled={!isEdit}
      />

      <StyledListItemIcon>
        {isEdit
          ? (
            <IconButton onClick={() => onBlur()}>
              <CheckOutlinedIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => onIsEditToggle()} disabled={isChecked}>
              <EditIcon />
            </IconButton>
          )}
      </StyledListItemIcon>

      <StyledListItemIcon>
        <IconButton onClick={() => onRemove()}>
          <DeleteIcon />
        </IconButton>
      </StyledListItemIcon>
    </StyledListItem>
  );
};

export default Todo;
