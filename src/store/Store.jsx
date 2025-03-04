import { create } from 'zustand';

const useStore = create((set) => ({
    tasks: [],
    userinput: '',
    editingIndex: null,

}));

export default useStore;
