import useCounterStore from "./store/Store";  

const Counter = () => {
//     const {counter,increment, decrement,increasedBy,reset} = useCounterStore();
//     // const counter = useCounterStore((state) => state.counter); 
  
//     return <>
//         <div className="text-center text-7xl">{counter}</div>
//         <div className="flex justify-center gap-5 mt-5">
//             <button className="p-5 border" onClick={increment}>+</button>
//             <button className="p-5 border" onClick={decrement}>-</button>
//             <button className="p-5 border" onClick={() => increasedBy(10)}>+10</button>
//             <button className="p-5 border" onClick={reset}>Reset</button>
//         </div>
//     </>
// }

 const { tasks, userinput, editingIndex, setUserinput, addTask, deleteTask, startEditing, saveEdit } = useCounterStore();

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
      onClick={editingIndex !== null ? saveEdit : addTask}>
        {editingIndex !== null ? 'Save' : 'Add '}
      </button>
      {tasks.map((task, index) => (
        <div 
        className="m-1"
        key={index}>
          <h1 className="mt-4 ml-1 font-bold text-3xl">{task}</h1>
          <button className="cursor-pointer border p-1 m-1" onClick={() => deleteTask(index)}>Delete</button>
          <button className="cursor-pointer border p-1" onClick={() => startEditing(index)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Counter;
