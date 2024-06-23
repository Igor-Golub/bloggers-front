import { RouterProvider } from "react-router-dom";
import Main from "./ui/Main.tsx";
import { router } from "./router";

function App() {
  return (
    <Main>
      <RouterProvider router={router} />
    </Main>
  );
}

export default App;
