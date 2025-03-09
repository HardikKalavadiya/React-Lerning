import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [passLength, setLength] = useState(8);

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= passLength; i++) {
      let indexNumber = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(indexNumber);
    }
    setPassword(pass);
  }, [passLength, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [passLength, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-screen h-screen flex justify-center">
        <div className="max-w-lg mx-md shadow-md justify-center rounded-lg px-4 mt-20 mb-auto text-orange-500 bg-gray-600">
          <h1 className="text-black text-center my-3">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="outline bg-amber-600 text-purple-600 px-3 py-0.5 shrink-0"
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-3">
            <div className="flex items-center gap-x-2 my-3">
              <input
                type="range"
                min={6}
                max={50}
                value={passLength}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {passLength}</label>
            </div>
            <div className="flex items-center gap-x-1 my-2">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1 my-2">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
