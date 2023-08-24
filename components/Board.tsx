"use client";
import useBoardStore from "@/store";
import React, { useEffect } from "react";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import Column from "./Column";

function Board() {
  const [board, getBoard, setBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
    state.setBoard,
  ]);
  useEffect(() => {
    getBoard();
  }, []);
  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    if (type == "todo") {
      if (destination && source) {
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        )
          return;
        const newBoard = board;
        const newStatus = destination.droppableId as TypeColumn;
        const newColumns = new Map(newBoard.columns.entries());
        const todo = newColumns
          .get(source.droppableId as TypeColumn)
          ?.todos.at(source.index) as Todo;
        const [removed] = newColumns
          .get(source.droppableId as TypeColumn)
          ?.todos.splice(source.index, 1) as Todo[];
        newColumns
          .get(destination.droppableId as TypeColumn)
          ?.todos.splice(destination.index, 0, removed);
        newBoard.columns = newColumns;
        setBoard(newBoard, todo, newStatus);
      }
    }
  };
  return (
    <div className="mt-10 m-auto pl-7">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl"
            >
              {Array.from(board.columns.entries()).map(
                ([id, column], index) => {
                  return (
                    <Column
                      key={id}
                      todos={column.todos}
                      id={id}
                      index={index}
                    />
                  );
                }
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Board;
