import DemoComponent from "./components/DemoComponent";
import HomePage from "./Pages/HomePage";
import ProgressBar from "./components/ProgressBar";
import TopicSubtopic from "./components/TopicSubtopic";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InterestPage from "./Pages/InterestPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/interest", element: <InterestPage /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
