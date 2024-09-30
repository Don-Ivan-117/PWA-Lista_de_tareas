import { useTaskStore } from "../store"
import TaskDetails from "./TaskDetails"


const TaskList = () => {

    const tasks = useTaskStore((state)=> state.tasks)

    return (
        <div className="">
            {tasks.length ? (
                <>
                    {
                        tasks.map((task,index)=> (
                            <TaskDetails key={task.id} task={task} index={index} />
                        ))
                    }
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pendientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center text-gray-300">
                        Comienza agregando tareas {''}
                        <span className="text-indigo-300 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default TaskList
