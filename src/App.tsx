import { ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import TaskForm from './components/TaskForm'

function App() {

  return (
    <>
      <div className="h-full bg-neutral-200 dark:bg-neutral-700 min-h-screen">
          <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
            Seguimiento de {''}
            <span className="text-indigo-700">Actividades</span>
          </h1>

          <div className="container h-full p-10">
              <div  className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                <TaskForm/>
              </div>
          </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default App
