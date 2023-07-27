import React, {ChangeEvent, FormEvent, useState} from "react";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { uid } from 'uid';

import {useAppDispatch} from "../../redux/hooks";
import {addTodo} from "../../redux/slices/todosSlice";

const Form = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClear = () => {
    setValue('');
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!value.length) {
      return;
    }

    const newTodo = {
      id: uid(),
      isChecked: false,
      value,
    };

    dispatch(addTodo(newTodo));
    onClear();
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Enter todo here"
        value={value}
        onChange={onChange}
        autoComplete="off"
        autoFocus
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {!!value.length && (
                <IconButton edge="end" onClick={onClear}>
                  <ClearIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default Form;
