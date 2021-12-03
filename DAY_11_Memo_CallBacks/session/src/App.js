import React from "react";
// import { MemoizedMovie, Movie } from "./Components/MoveDate";
import "./App.css";
import Factorial from "./Components/Factorial";

function App() {
  return (
    <>
      <div className="App">
        {/* <MemoizedMovie
          title="Heat"
          releaseDate="December 15, 1995"
          memo={true}
        />
        <Movie title="Heat" releaseDate="December 15, 1995" memo={false} /> */}
        <Factorial />
      </div>
    </>
  );
}

export default App;
