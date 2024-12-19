import { createStore } from "effector";
import { addEvent, toggleTask } from "./events";
import { fetchTasks } from "./effects";

export const tasksStore = createStore([])
  .on(addEvent, (state, task) => [...state, task])
  .on(toggleTask, (state, id) =>
    state
      .map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
      
  ).on(fetchTasks.doneData, (state, tasks) => tasks)
