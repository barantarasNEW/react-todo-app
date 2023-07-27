import {useAppSelector} from "../../redux/hooks";
import {StyledList} from "./Styles";
import Todo from "../Todo/Todo";

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