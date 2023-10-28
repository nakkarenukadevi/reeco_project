import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  return <></>;
}

export const appLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
      },
    ],
  },
]);

export default App;
