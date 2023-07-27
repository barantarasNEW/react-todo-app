import {Outlet} from "react-router";
import {CssBaseline} from "@mui/material";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <CssBaseline>
      <Header todosLength={6} />

      <main>
        <Outlet />
      </main>
    </CssBaseline>
  );
};

export default Layout;
