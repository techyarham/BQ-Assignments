import { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);

  function select() {
    setShow(!show);
  }

  return (
    <div className="bulb-box">
      {show ? (
        // Bulb On
        <svg
          viewBox="0 0 64 100"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-bulb"
          aria-hidden="true"
          width="100"
        >
          <g>
            <circle
              cx="32"
              cy="30"
              r="22"
              fill="#FFD54A"
              stroke="#B8860B"
              strokeWidth="2"
            />
            <path
              d="M22 52h20v8a4 4 0 0 1-4 4H26a4 4 0 0 1-4-4z"
              fill="#BDBDBD"
            />
            <rect x="24" y="66" width="16" height="10" rx="2" fill="#9E9E9E" />
            <line
              x1="32"
              y1="20"
              x2="32"
              y2="36"
              stroke="#FF8F00"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </svg>
      ) : (
        // Bulb Off
        <svg
          viewBox="0 0 64 100"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-bulb"
          aria-hidden="true"
          width="100"
        >
          <g>
            <circle
              cx="32"
              cy="30"
              r="22"
              fill="#ECEFF1"
              stroke="#B0BEC5"
              strokeWidth="2"
            />
            <path
              d="M22 52h20v8a4 4 0 0 1-4 4H26a4 4 0 0 1-4-4z"
              fill="#CFD8DC"
            />
            <rect x="24" y="66" width="16" height="10" rx="2" fill="#B0BEC5" />
          </g>
        </svg>
      )}

      <div>
        <button onClick={select} style={{ marginTop: "20px", padding: "10px" }}>
          {show ? "On" : "Off"}
        </button>
      </div>
    </div>
  );
}

export default App;
