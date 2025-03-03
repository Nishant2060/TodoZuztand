import { create } from 'zustand';

const initialState = {
    counter : 0,
}
const useCounterStore = create((set) => ({
    // ...initialState,
    // increment: () => set((state) => ({ counter: state.counter + 1 })),
    // decrement: () => set((state) => ({ counter: state.counter > 0 ? state.counter - 1 : 0 })),
    // increasedBy: (num) => set((state) => ({counter: state.counter + num})),
    // reset: () => set(initialState),

    tasks: [],
    userinput: '',
    editingIndex: null,
  
    setUserinput: (input) => set({ userinput: input }),
    
    addTask: () => set((state) => {
      if (state.userinput.trim()) {
        return {
          tasks: [...state.tasks, state.userinput],
          userinput: '',
        };
      }
      return state;
    }),
    deleteTask: (index) => set((state) => ({
      tasks: state.tasks.filter((_, idx) => idx !== index),
    })),
    startEditing: (index) => set((state) => ({
      editingIndex: index,
      userinput: state.tasks[index],
    })),
    saveEdit: () => set((state) => {
      const updatedTasks = state.tasks.map((task, idx) =>
        idx === state.editingIndex ? state.userinput : task
      );
      return {
        tasks: updatedTasks,
        editingIndex: null,
        userinput: '',
      };
    }),
  }));


export default useCounterStore;
 