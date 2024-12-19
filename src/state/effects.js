import { createEffect } from "effector";

export const fetchTasks = createEffect(async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "надо поучиться", comoleted: true },
        { id: 2, text: "надо подкачаться", comoleted: false },
        { id: 3, text: "сходить в парк", comoleted: false },
      ]);
    }, 1000);
  });
});
