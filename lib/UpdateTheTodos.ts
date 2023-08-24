"use server";

import prisma from "@/prisma";

export const UpdateTheTodos = async (todo: Todo, status: TypeColumn) => {
  await prisma.task.update({
    where: {
      id: todo.id,
    },
    data: {
      status: status,
    },
  });
};
