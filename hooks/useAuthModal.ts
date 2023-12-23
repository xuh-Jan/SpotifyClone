import { create } from "zustand";

interface AuthModalStroe {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

}

const useAuthModal = create<AuthModalStroe>((set) => ({
    isOpen:false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default useAuthModal;