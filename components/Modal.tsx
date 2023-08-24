"use client";
import { useState } from "react";
import { Dialog, RadioGroup } from "@headlessui/react";
import useModalStore from "@/store/ModalStore";
import handleSubmit from "@/lib/HandleSubmit";
import { AiOutlineCheckCircle } from "react-icons/ai";
import useBoardStore from "@/store";
function Modal() {
  const [isOpen, setIsOpen, taskStatus, setTaskStatus] = useModalStore(
    (state) => [
      state.isOpen,
      state.setIsOpen,
      state.taskStatus,
      state.setTaskStatus,
    ]
  );
  let [plan, setPlan] = useState("startup");
  const [addTodo] = useBoardStore((state) => [state.addTodo]);
  const [title, setTitle] = useState("");
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-black py-5 px-10 ">
          <Dialog.Title>Add Task</Dialog.Title>
          <Dialog.Description>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded p-2 bg-[#040D12] text-white mt-2"
            />
            <RadioGroup
              value={taskStatus}
              onChange={setTaskStatus}
              className="flex flex-col mt-5 justify-center items-center"
            >
              <RadioGroup.Label>Status</RadioGroup.Label>
              <RadioGroup.Option value="TODO" className={"mt-4 cursor-pointer"}>
                {({ checked }) => (
                  <div
                    className={
                      checked
                        ? "bg-[#040D12] w-[200px] px-3 py-2 rounded-xl flex justify-between items-center"
                        : "bg-[#040D12] w-[200px] px-3 py-2 rounded-xl bg-opacity-50 flex justify-center items-center hover:bg-opacity-100"
                    }
                  >
                    TODO
                    {checked && <AiOutlineCheckCircle />}
                  </div>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option
                value="INPROGRESS"
                className={"mt-4 cursor-pointer"}
              >
                {({ checked }) => (
                  <div
                    className={
                      checked
                        ? "bg-[#040D12] w-[200px] py-2 px-3 rounded-xl flex justify-between items-center"
                        : "bg-[#040D12] w-[200px] py-2 px-3 rounded-xl bg-opacity-50 flex justify-center items-center hover:bg-opacity-100"
                    }
                  >
                    INPROGRESS
                    {checked && <AiOutlineCheckCircle />}
                  </div>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option
                value="DONE"
                className={"mt-4 mb-4 cursor-pointer"}
              >
                {({ checked }) => (
                  <div
                    className={
                      checked
                        ? "bg-[#040D12] w-[200px] px-3 py-2 rounded-xl flex justify-between items-center"
                        : "bg-[#040D12] w-[200px] px-3 py-2 rounded-xl bg-opacity-50 flex justify-center items-center hover:bg-opacity-100"
                    }
                  >
                    DONE
                    {checked && <AiOutlineCheckCircle />}
                  </div>
                )}
              </RadioGroup.Option>
            </RadioGroup>
            <button
              className="w-full rounded p-2 bg-[#040D12] text-white mt-2 hover:bg-opacity-50 cursor-pointer"
              onClick={() => {
                addTodo(title, taskStatus);
                setIsOpen(false);
              }}
            >
              Add
            </button>
          </Dialog.Description>
          {/* ... */}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default Modal;
