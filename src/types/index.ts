//Tipo de dato para almacenar a los pacientes en un arreglo
export type Patient = {
    id: string
    name: string
    caretaker: string
    email: string
    date: Date
    symptoms: string
}

// tipo de dato usado para recolectar los datos del form
export type DraftPatient = Omit<Patient, 'id'>

export type Task = {
    id: string
    title: string
    description: string
    fecha: string
    hora: string
}

export type DraftTask = Omit<Task, 'id'>