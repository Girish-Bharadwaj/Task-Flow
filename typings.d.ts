interface Board {
  columns: Map<TypeColumn, Column>;
}

type TypeColumn = "TODO" | "INPROGRESS" | "DONE";

interface Column {
  id: TypeColumn;
  todos: Todo[];
}
interface Todo {
  id: number;
  title: string;
  status: TypeColumn;
  createdAt: Date;
}
