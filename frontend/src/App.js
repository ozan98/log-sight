import ToolKit from './components/ToolKit'
// import LogView from './components/LogView'
import NavBar from './components/NavBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return(
    <main className="main-app">
      
      <NavBar />
      {/* <LogView /> */}
      <ToolKit />
      <ToastContainer />

    </main>
  )
}

export default App;
