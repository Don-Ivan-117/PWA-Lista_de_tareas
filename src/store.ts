import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { Task, DraftTask } from './types'

type TaskState = {
    // Valores
    tasks: Task[]
    activeId: Task['id'] // Este valor solo almacena el id del paciente  aeditar nada mas 
    // Funciones: nombre del parametro, tipo de dato y si retorna o no algun valor
    addTask: (data: DraftTask) => void
    deleteTask: (id: Task['id']) => void
    getTaskById: (id: Task['id']) => void //obtener el id
    updateTask: (data: DraftTask) => void // editar la información del id obtenido. Usa el type DraftPatient por que al volver al form para su edicion no necesita id
}

const createTask = (task: DraftTask) : Task => {
    const fechaNueva = new Date();
    const fecha = fechaNueva.toLocaleDateString('es-ES')
    const hora = fechaNueva.toLocaleTimeString('es-ES')
    return { ...task, id: uuidv4(), fecha, hora }
}

// Store
export const useTaskStore = create<TaskState>()(
    devtools(
    persist((set) => ({
        tasks: [],
        activeId: '',
        addTask: (data) => {
            const newTask = createTask(data)
            set((state) => ({
                tasks: [...state.tasks, newTask]
            }))
        },
        deleteTask: (id) => {
            set((state) => ({
                tasks: state.tasks.filter( task => task.id !== id )
            }))
        },
        getTaskById: (id) => {
            set(() => ({
                activeId: id
            }))
        },
        updateTask: (data) => {
            set((state) => ({
                tasks: state.tasks.map( task => task.id === state.activeId ? {id: state.activeId, ...data } : task),
                activeId: '' // Despues de actualizar el usuario, reiniciar el valor del ID
            }))
        }
    }), {
        name: 'task-storage',
    })
))