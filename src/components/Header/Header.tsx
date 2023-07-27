import {Typography} from "@mui/material";
import {StyledHeader} from "./Styles";

type Props = {
  todosLength: number;
};

const Header: React.FC<Props> = ({todosLength}) => {
  return (
    <StyledHeader>
      <Typography variant="h4">
        {`Todos (${todosLength})`}
      </Typography>
    </StyledHeader>
  );
};

export default Header;
