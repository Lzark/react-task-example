import { useContext } from "react";
import { TaskContext } from "../context/taskContext";
function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="p-4 rounded-md bg-gray-800 text-white ">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button className="bg-red-500 p-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
