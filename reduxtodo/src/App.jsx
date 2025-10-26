import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 mt-10">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          To-Do Manager
        </h1>
        <TodoInput />
        <TodoList />
      </div>
      
    </div>
  );
}
