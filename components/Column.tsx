import useBoardStore from "@/store";
import useModalStore from "@/store/ModalStore";
import { title } from "process";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { IoAddCircle } from "react-icons/io5";
interface ColumnProps {
  todos: Todo[];
  id: TypeColumn;
  index: number;
}

function Column({ todos, id, index }: ColumnProps) {
  const [isOpen, setIsOpen, setTaskStatus] = useModalStore((state) => [
    state.isOpen,
    state.setIsOpen,
    state.setTaskStatus,
  ]);
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-[#5C8374] p-2 rounded shadow-xl h-[fit-content]"
        >
          <Droppable droppableId={id} type="todo">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <h1 className="flex justify-between">
                  {id}
                  <span className="bg-[#183D3D] p-1 px-3 rounded-full">
                    {todos.length}
                  </span>
                </h1>
                <div className="space-y-2">
                  {todos.map((todo, index) => {
                    return (
                      <Draggable
                        draggableId={todo.id.toString()}
                        index={index}
                        key={todo.id}
                      >
                        {(provided) => (
                          <div
                            key={todo.id}
                            className="bg-[#183D3D] p-2 rounded my-2"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <h1 className="text-white">{todo.title}</h1>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
                <div className="h-[30px] flex justify-end items-center mt-3">
                  <button
                    onClick={() => {
                      setTaskStatus(id);
                      setIsOpen(true);
                    }}
                  >
                    <IoAddCircle size={30} />
                  </button>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default Column;
