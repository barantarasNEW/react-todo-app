import React, {ChangeEvent, FormEvent, useState} from "react";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import {StyledFormWrapper} from "./Styles";

const Form = () => {
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClear = () => {
    setValue('');
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onClear();
  };

  return (
    <form onSubmit={onSubmit}>
      <StyledFormWrapper>
        <TextField
          label="Enter todo here"
          value={value}
          onChange={onChange}
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
      </StyledFormWrapper>
    </form>
  );
};

export default Form;
