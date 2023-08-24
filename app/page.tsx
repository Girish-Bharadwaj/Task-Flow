import Board from "@/components/Board";
import GPT from "@/components/GPT";
import Header from "@/components/Header";

export default async function Home() {
  return (
    <>
      <Header />
      <main className="p-2">
        <GPT />
        <Board />
      </main>
    </>
  );
}
