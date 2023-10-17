import React from "react";
import QuizScreen from "./QuizScreen";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <QuizScreen />
    </div>
  );
};

export default App;
