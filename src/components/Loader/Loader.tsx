import {createPortal} from "react-dom";
import {CircularProgress} from "@mui/material";
import {StyledBox} from "./Styles";

const Loader = () => {
  return (
    <>
      {
        createPortal(
          (
            <StyledBox>
              <CircularProgress />
            </StyledBox>
          ),
          document.getElementById('portal') as HTMLElement
        )
      }
    </>
  );
};

export default Loader;
