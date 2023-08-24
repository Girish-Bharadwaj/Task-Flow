"use server";
import prisma from "@/prisma";
async function handleSubmit(title: string) {
  await prisma.task.create({
    data: {
      title: title,
    },
  });
}

export default handleSubmit;
