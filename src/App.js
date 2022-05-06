import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import News from "./components/News";

const App = (props) => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_API_KEY;

  const [progress, setProgress] = useState(10);

  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={3}
      />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="home"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          path="/general"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
