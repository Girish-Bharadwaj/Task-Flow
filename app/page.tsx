import GPT from "@/components/GPT";
import Header from "@/components/Header";
import prisma from "@/prisma/index";

export default async function Home() {
  const allTaks = await prisma.task.findMany();
  console.log(allTaks);
  return (
    <>
      <Header />
      <main className="p-2">
        <GPT />
      </main>
    </>
  );
}
