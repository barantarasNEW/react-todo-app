import {Container} from "@mui/material";

import Form from "../../components/Form/Form";
import Todos from "../../components/Todos/Todos";

const Todo = () => {
  return (
    <Container>
      <Form />

      <Todos />
    </Container>
  );
};

export default Todo;
