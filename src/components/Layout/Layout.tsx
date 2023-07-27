import {Outlet} from "react-router";
import {CssBaseline} from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {StyledMain, StyledWrapper} from "./Styles";

const Layout = () => {
  return (
    <CssBaseline>
      <StyledWrapper>
        <Header />

        <StyledMain>
          <Outlet />
        </StyledMain>

        <Footer />
      </StyledWrapper>
    </CssBaseline>
  );
};

export default Layout;
