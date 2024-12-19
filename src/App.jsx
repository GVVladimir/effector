import "./App.css";
import { useEffect } from "react";
import AddFormTask from "./components/addFormTask";
import TaskList from "./components/TaskList";
import { fetchTasks } from "./state/effects";

function App() {
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container-add">
      <h1>Мои ну и дела</h1>
      <AddFormTask />
      <TaskList />
    </div>
  );
}

export default App;
