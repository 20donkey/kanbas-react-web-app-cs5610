import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Counter() {
  const [count, setCount] = useState(7);

  return (
    <div className=" my-4">
      <h2>Counter: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        id="wd-counter-up-click"
        className="btn btn-success mr-2"
      >
        Up
      </button>
      <button
        onClick={() => setCount(count - 1)}
        id="wd-counter-down-click"
        className="btn btn-danger"
      >
        Down
      </button>
    </div>
  );
}
