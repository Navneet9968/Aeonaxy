import DemoComponent from "./components/DemoComponent";
import HomePage from "./Pages/HomePage";
import ProgressBar from "./components/ProgressBar";
import TopicSubtopic from "./components/TopicSubtopic";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InterestPage from "./Pages/InterestPage";
import PersuasionPage from "./Pages/PersuasionPage";
import MathComfort from "./Pages/MathComfort";
import QuotePage from "./Pages/QuotePage";
import LoadingPage from "./Pages/LoadingPage";
import LearningPath from "./Pages/LearningPath";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/interest", element: <InterestPage /> },
  { path: "/persuasion", element: <PersuasionPage /> },
  { path: "/math-comfort", element: <MathComfort /> },
  { path: "/quote", element: <QuotePage /> },
  { path: "/loading", element: <LoadingPage /> },
  { path: "/learning-path", element: <LearningPath /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
