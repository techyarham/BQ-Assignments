Perfect choice, Muhammad Arham 💪 — let’s make your **React + Redux Toolkit To-Do Manager** stylish using **TailwindCSS**.
Below is your **complete working project code**, ready to run with **Vite + Tailwind + Redux Toolkit**.

---

## 🚀 Project: To-Do Manager (React + Redux Toolkit + TailwindCSS)

### 🧱 Folder Structure

```
todo-manager/
 ├── src/
 │    ├── app/store.js
 │    ├── features/todoSlice.js
 │    ├── components/TodoInput.jsx
 │    ├── components/TodoList.jsx
 │    ├── App.jsx
 │    ├── index.css
 │    └── main.jsx
 ├── package.json
 └── tailwind.config.js
```

---

## ⚙️ Setup Instructions

1. **Create Vite project**

   ```bash
   npm create vite@latest todo-manager --template react
   cd todo-manager
   ```
2. **Install dependencies**

   ```bash
   npm install @reduxjs/toolkit react-redux
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
3. **Set up Tailwind**
   In `tailwind.config.js`:

   ```js
   export default {
     content: ["./index.html", "./src/**/*.{js,jsx}"],
     theme: { extend: {} },
     plugins: [],
   };
   ```
4. **Add Tailwind directives**
   In `src/index.css`:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

---

## 🧩 Complete Source Code

### `src/app/store.js`

```js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
```

---

### `src/features/todoSlice.js`

```js
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleComplete: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

---

### `src/components/TodoInput.jsx`

```jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

export default function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className="flex justify-center items-center gap-2 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task..."
        className="w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        Add
      </button>
    </div>
  );
}
```

---

### `src/components/TodoList.jsx`

```jsx
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../features/todoSlice";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (todos.length === 0)
    return <p className="text-center text-gray-500">No tasks yet 🚀</p>;

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-2 shadow-sm"
        >
          <span
            className={`text-lg ${
              todo.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {todo.text}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => dispatch(toggleComplete(todo.id))}
              className={`px-3 py-1 rounded-lg text-white ${
                todo.completed
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {todo.completed ? "Undo" : "Done"}
            </button>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
```

---

### `src/App.jsx`

```jsx
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 mt-10">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          📝 To-Do Manager
        </h1>
        <TodoInput />
        <TodoList />
      </div>
      <footer className="mt-8 text-sm text-gray-600">
        Built with ❤️ by Muhammad Arham
      </footer>
    </div>
  );
}
```

---

### `src/main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

## 🎨 Output Preview

✅ Clean, centered To-Do app
✅ Nice gradient background
✅ Buttons with hover effects
✅ Tasks strike-through when completed

---

## 💡 Bonus Ideas (for extra marks 😎)

* Add localStorage to save todos even after refresh.
* Add filters: “All | Completed | Pending”.
* Add a counter: “You have 3 pending tasks”.

---

Would you like me to **add localStorage support** next (so tasks stay even after refresh)?
