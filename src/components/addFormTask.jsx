import { useState } from "react";
import { addEvent } from "../state/events";
import { useUnit } from "effector-react";
import { tasksStore } from "../state/store";

const AddFormTask = () => {
  const [taskText, setTaskText] = useState("");
  const tasks = useUnit(tasksStore);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      const newTask = {
        id: tasks.length + 1,
        text: taskText,
        completed: false,
      };
      addEvent(newTask);
      setTaskText("");
    }
  };

  return (
    <form className="form-task" onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Название задачи"
        className="task-input"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit" className="task-button">
        Добавить задачу
      </button>
    </form>
  );
};
export default AddFormTask;
