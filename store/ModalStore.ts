import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;
  setIsOpen: (action: boolean) => void;
  taskStatus: TypeColumn;
  setTaskStatus: (action: TypeColumn) => void;
}

const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  setIsOpen: (action) => set({ isOpen: action }),
  taskStatus: "TODO",
  setTaskStatus: (action) => set({ taskStatus: action }),
}));

export default useModalStore;
