import { create } from "zustand";

interface UploadModalStroe {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

}

const useUploadModal = create<UploadModalStroe>((set) => ({
    isOpen:false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default useUploadModal;