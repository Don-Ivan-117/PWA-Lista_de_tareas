import { toast } from "react-toastify"
import { useTaskStore } from "../store"
import { Task } from "../types"

type TaskDetailsProps = {
    task : Task
    index : number
}

const TaskDetails = ({task,index}: TaskDetailsProps) => {

    const deleteTask = useTaskStore((state) => state.deleteTask)
    const getTaskById = useTaskStore((state) => state.getTaskById)

    const handleClick = () => {
        deleteTask(task.id)
        toast('Tarea Eliminada', {
            type: 'error'
        })
    }

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
            <div className="p-8 flex items-center">
                <div className="pr-4">
                    <p className="text-4xl font-bold text-black">#{index+1}</p>
                </div>
                <div>
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold w-full">
                        <div className=' flex items-center space-x-4 justify-between'>
                        {task.title} {''}
                            <div>
                                <button onClick={() => getTaskById(task.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit stroke-green-600" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                        <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                        <path d="M16 5l3 3" />
                                    </svg>
                                </button> 
                                <button onClick={handleClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-x stroke-red-600" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                                        <path d="M9 9l6 6m0 -6l-6 6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="mt-2 text-gray-500 text-sm">
                        <span className="font-bold text-indigo-500">Agregado: {''}</span>
                        {task.fecha} - {task.hora}
                    </p>
                    <p className="mt-2 text-gray-500">Descripcion: {task.description}</p>
                </div>
    
            </div>
            
        </div>
    )
}

export default TaskDetails