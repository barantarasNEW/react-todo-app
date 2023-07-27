import {useAppSelector} from "../../redux/hooks";
import Todo from "../Todo/Todo";
import {StyledList} from "./Styles";

const Todos = () => {
  const {todos} = useAppSelector(state => state.todos);

  return (
    <StyledList dense>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </StyledList>
  );
}

export default Todos;