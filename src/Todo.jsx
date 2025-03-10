import useStore from "./store/Store"; 
import { setUserinput, addTask, deleteTask, startEditing, saveEdit } from "./Action"; 

const Todo = () => {
  const { tasks, userinput, editingIndex } = useStore(); 

  return (
    <div>
      <input
        className="border p-2 ml-2 font-bold text-3xl"
        type="text"
        value={userinput}
        onChange={(e) => setUserinput(e.target.value)} 
      />
      <button 
        className="border p-2 text-3xl cursor-pointer mx-2"
        onClick={editingIndex !== null ? saveEdit : addTask}
      >
        {editingIndex !== null ? 'Save' : 'Add'}
      </button>
      {tasks.map((task, index) => (
        <div className="m-1" key={index}>
          <h1 className="mt-4 ml-1 font-bold text-3xl">{task}</h1>
          <button className="cursor-pointer border p-1 m-1" onClick={() => deleteTask(index)}>Delete</button>
          <button className="cursor-pointer border p-1" onClick={() => startEditing(index)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
