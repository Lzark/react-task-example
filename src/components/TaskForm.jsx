import { useState,useContext } from "react";
import { TaskContext } from "../context/taskContext";
//createTask
function TaskForm({  }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-900 mb-4 p-10">
        <h1 className="text-2xl font-bold text-white mb-3">Crea una tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        className="bg-slate-300 p-3 w-full mb-2"
        autoFocus
      />
      <textarea
        placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
        className="bg-slate-300 p-3 w-full mb-2"
      ></textarea>
      <button className="bg-indigo-500 p-3 py-1 text-white rounded-md">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
