import React, { useState } from "react";
import './todo.css'
let nextId = 0;
function ToDo() {
  const [inputValue, setInputValue] = useState("");
  const [contents, setContent] = useState([]);

  const handleAddTask = () => {
    setContent([
      ...contents,
      {
        id: nextId++,
        tache: inputValue
      }
    ]);
    setInputValue("");
  };
  const deleteByValue = value => {
    setContent(oldValues => {
      return oldValues.filter(content => content !== value)
    })
  }
  return (
    <div align="center">
      <div>
        <form>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="add_button"type="button" onClick={handleAddTask}>
            Add
          </button>
        </form>
      </div>
      <div className="tododiv" align="center">
        <ul className="ul_todo">
          {contents.map((content) => (
            <div className="div_todo_list" key={content.id}>
              <li className="todolist">{content.tache}</li>
              <button className="delete_button" onClick={()=>deleteByValue(content)}>delete</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
