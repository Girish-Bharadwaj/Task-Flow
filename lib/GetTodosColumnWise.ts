"use server";

import prisma from "@/prisma";

export const GetTodosColumnWise = async () => {
  const todos = await prisma.task.findMany();
  const columns = new Map<TypeColumn, Column>();
  if (!columns.get("TODO")) columns.set("TODO", { id: "TODO", todos: [] });
  if (!columns.get("INPROGRESS"))
    columns.set("INPROGRESS", { id: "INPROGRESS", todos: [] });
  if (!columns.get("DONE")) columns.set("DONE", { id: "DONE", todos: [] });
  todos.forEach((todo) => {
    columns.get(todo.status)?.todos.push(todo);
  });
  const board: Board = { columns };
  return board;
};
