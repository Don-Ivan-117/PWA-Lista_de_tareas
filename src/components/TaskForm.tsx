import { useForm } from 'react-hook-form'
import type { DraftTask } from '../types'
import TaskList from "./TaskList";
import { useTaskStore } from '../store'
import { useEffect } from 'react';
import { toast } from 'react-toastify';



const TaskForm = () => {
    const addTask = useTaskStore(state => state.addTask)
    const activeId = useTaskStore(state => state.activeId)
    const tasks = useTaskStore(state => state.tasks)
    const updateTask = useTaskStore(state => state.updateTask)

    const { register, handleSubmit, setValue , formState: { errors}, reset} = useForm<DraftTask>()

    useEffect(()=>{
        if(activeId){
            const activeTask = tasks.filter(task => task.id === activeId)[0]
            setValue('title', activeTask.title)
            setValue('description', activeTask.description)
        }
    },[activeId])

    const registerTask = (data: DraftTask)=>{
        if(activeId){
            updateTask(data)
            toast('Tarea Actualizada Correctamente', {
                type: 'success'
            })
        }else{
            addTask(data)
            toast.success('Tarea Registrada Correctamente')
        }
        reset()
    }

    return (
        <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                        <div className="text-center">
                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">TO DO</h4>
                        </div>
                        <form className="px-4 md:px-12 pt-6 pb-8 mb-4 w-full space-y-8 " noValidate onSubmit={handleSubmit(registerTask)}>
                            <p className="mb-4 text-center text-neutral-800 dark:text-neutral-200">
                                Ingresa tus actividades...
                            </p>

                            <div className="relative mb-2 items-center justify-center bg-gray-200" data-te-input-wrapper-init>
                                <input
                                    id="title"
                                    type="text"
                                    className="peer w-full rounded border hover:border-gray-600 px-3 py-[0.32rem] leading-[1.6] duration-200 focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100"
                                    placeholder=""
                                    {
                                        ...register('title', {
                                            required: 'Asignale un nombre a la tarea'
                                        })
                                    }
                                />
                                <span className="text-gray-400 absolute left-0 top-1 px-1 text-md tracking-wide peer-focus:text-blue-500 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-white ml-2 peer-valid:text-sm peer-valid:-translate-y-5">
                                    Titulo
                                </span>
                            </div>

                            <div className="relative mb-2 items-center justify-center bg-gray-200"data-te-input-wrapper-init>
                                <textarea 
                                    className="peer w-full rounded border hover:border-gray-600 px-3 py-[0.32rem] leading-[1.6] duration-200 focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100" 
                                    id="description"
                                    {
                                        ...register('description', {
                                            required: 'Describa la tarea'
                                        })
                                    }
                                    />

                                <label className="text-gray-400 absolute left-0 top-1 px-1 text-md tracking-wide peer-focus:text-blue-500 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-white ml-2 peer-valid:text-sm peer-valid:-translate-y-5">
                                    Descripción
                                </label>
                            </div>

                            <div className="mb-12 pb-1 pt-1 text-center">
                                <button
                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                    type="submit"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    style={{
                                        background: `linear-gradient(to right,#ee7724,#d8363a, #dd3675, #b44593)`
                                    }}
                                >
                                    guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div 
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    style={{
                        background: `linear-gradient(to right,#ee7724,#d8363a, #dd3675, #b44593)`
                    }}
                    >
                    <div className="w-full text-white px-3">
                        <h4 className="mb-6 text-xl font-semibold text-center">
                            Pendientes
                        </h4>
                        <TaskList/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default TaskForm;
