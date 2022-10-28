import React, { useState } from "react";

function App() {
  const [ivalue, setval] = useState("");
  const [initialVal, changVal] = useState([]);
  function handleChange(e) {
    const val = e.target.value;
    setval(val);
  }
  function additem() {
    changVal((prevVal) => {
      return [...prevVal, ivalue];
    });
    setval("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={ivalue} />
        <button onClick={additem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {initialVal.map((todoitm) => (
            <li>{todoitm}</li>
          ))}
          ;
        </ul>
      </div>
    </div>
  );
}

export default App;
