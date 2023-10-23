import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";

import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import Store from "./components/utils/store";

function App() {
  return (
    <>
      <Provider store={Store}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
}

export const appLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);

export default App;
