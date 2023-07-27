import {lazy} from 'react';
import {Navigate, Route, Routes} from "react-router";
const Layout = lazy(() => import("./components/Layout/Layout"));
const Todo = lazy(() => import("./pages/Todo/Todo"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Todo />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
