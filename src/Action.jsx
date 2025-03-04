import useStore from "./store/Store";



export const setUserinput = (input) => {
    useStore.setState({ userinput: input })
};

export const addTask = () => {
    useStore.setState((state) => {
        if (state.userinput.trim()) {
          return {
            tasks: [...state.tasks, state.userinput],
            userinput: '',
          };
        }
        return state;
      })
};

export const deleteTask = (index) => {
    useStore.setState((state) => ({
        tasks: state.tasks.filter((_, idx) => idx !== index),
      }))
};

export const startEditing = (index) => {
    useStore.setState((state) => ({
        editingIndex: index,
        userinput: state.tasks[index],
      }))
};

export const saveEdit = () => {
    useStore.setState((state) => {
        const updatedTasks = state.tasks.map((task, idx) =>
          idx === state.editingIndex ? state.userinput : task
        );
        return {
            tasks: updatedTasks,
            editingIndex: null,
            userinput: '',
          };
        })
};

