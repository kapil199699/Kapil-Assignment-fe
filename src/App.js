import "./App.css";
import Login from "./components/Login/login";
import LatestStories from "./components/posts/latest stories/latest-stories";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Register from "./components/Login/register";
import BigStory from "./components/big-story/BigStory";
import Heading from "./components/heading/heading";
import LatestVideos from "./components/latest-videos/latestVideos";
import Quiz from "./components/quiz/quiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <div className="body">
              <BigStory />
              <Heading name="Latest Strories" />
              <LatestStories />
              <Heading name="Latest Videos" />
              <LatestVideos />
              <Heading name="Quiz" />
              <Quiz />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
