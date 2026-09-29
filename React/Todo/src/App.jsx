import React, { useRef, useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);

  const inputRef = useRef(null);

  function AddTodo() {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      name: input,
      completed: false,
    };

    setTodo((prev) => [...prev, newTodo]);
    setInput("");

    inputRef.current.focus();
  }

  function DeleteTodo(id) {
    setTodo((prev) => prev.filter((item) => item.id !== id));

    if (editingId === id) {
      setEditingId(null);
      setInput("");
    }
  }

  function EditTodo(id) {
    const selectedTodo = todo.find((item) => item.id === id);

    setEditingId(id);
    setInput(selectedTodo.name);

    inputRef.current.focus();
  }

  function SaveTodo() {
    if (input.trim() === "") return;

    setTodo((prev) =>
      prev.map((item) =>
        item.id === editingId
          ? { ...item, name: input }
          : item
      )
    );

    setEditingId(null);
    setInput("");

    inputRef.current.focus();
  }

  function ToggleTodo(id) {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />

      {editingId === null ? (
        <button onClick={AddTodo}>Add Todo</button>
      ) : (
        <button onClick={SaveTodo}>Save</button>
      )}

      <div>
        {todo.map((item) => (
          <div key={item.id}>
            <p>
              {item.name}{" "}
              {item.completed ? "✅ Completed" : "⏳ Pending"}
            </p>

            <button onClick={() => ToggleTodo(item.id)}>
              {item.completed ? "Undo" : "Complete"}
            </button>

            <button onClick={() => EditTodo(item.id)}>
              Edit
            </button>

            <button onClick={() => DeleteTodo(item.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;