import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../features/todoSlice";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (todos.length === 0)
    return <p className="text-center text-gray-500">No tasks yet </p>;

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
