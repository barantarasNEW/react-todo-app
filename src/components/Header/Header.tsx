import {Typography} from "@mui/material";
import {StyledHeader} from "./Styles";
import {useAppSelector} from "../../redux/hooks";
import {useMemo} from "react";

const Header = () => {
  const {todos} = useAppSelector(state => state.todos);
  const visibleTodos = useMemo(() => {
    return todos.filter(todo => !todo.isChecked);
  }, [todos]);

  return (
    <StyledHeader>
      <Typography variant="h4">
        {`Todos (${visibleTodos.length})`}
      </Typography>
    </StyledHeader>
  );
};

export default Header;
