import { useState } from "react";
import Timer from "./Effect.jsx";

function App() {
  let [color, setColor] = useState("white");

  return (
    <>
      <Timer />
      <div className="w-screen h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2 shadow-2xl bg-white px-2 py-1 rounded-3xl border-2 border-black">
            <button
              className="outline-none px-4 py-1 rounded-3xl text-white shodow-lg border-black"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-3xl text-white shodow-lg border-black"
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            >
              Black
            </button>
            <button
              className="outline-none px-4 py-1 rounded-3xl text-white shodow-lg border-black"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-3xl text-white shodow-lg border-black"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-3xl text-black shodow-lg border-black"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-3xl text-white shodow-lg border-black"
              style={{ backgroundColor: "olive" }}
              onClick={() => setColor("olive")}
            >
              Olive
            </button>
            <button
              className="outline px-4 py-1 rounded-3xl text-black shodow-lg border-black border-2"
              style={{ backgroundColor: "white" }}
              onClick={() => setColor("white")}
            >
              White
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
