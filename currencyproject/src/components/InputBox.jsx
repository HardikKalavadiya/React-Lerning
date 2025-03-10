import React from "react";

function InputBox({ label, className = "" }) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">label</label>
        <input
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
      </div>
    </div>
  );
}
export default InputBox;
