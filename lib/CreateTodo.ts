"use server";

import prisma from "@/prisma";

export const CreateTodo = async (title: string, taskStatus: TypeColumn) => {
  //if task not found in prism create
  await prisma.task.create({
    data: {
      title: title,
      status: taskStatus,
    },
  });
};
