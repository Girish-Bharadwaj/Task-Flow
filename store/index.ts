import { CreateTodo } from "@/lib/CreateTodo";
import { GetTodosColumnWise } from "@/lib/GetTodosColumnWise";
import { UpdateTheTodos } from "@/lib/UpdateTheTodos";
import { create } from "zustand";

interface BoardStore {
  board: Board;
  getBoard: () => void;
  setBoard: (board: Board, todo: Todo, status: TypeColumn) => void;
  addTodo: (title: string, taskStatus: TypeColumn) => void;
}

const useBoardStore = create<BoardStore>((set) => ({
  board: {
    columns: new Map<TypeColumn, Column>(),
  },
  getBoard: async () => {
    await GetTodosColumnWise();
    const board = await GetTodosColumnWise();
    set({ board });
  },
  setBoard: async (board: Board, todo: Todo, status: TypeColumn) => {
    await UpdateTheTodos(todo, status);
    set({ board });
  },
  addTodo: async (title: string, taskStatus: TypeColumn) => {
    await CreateTodo(title, taskStatus);
    const board = await GetTodosColumnWise();
    set({ board });
  },
}));

export default useBoardStore;
