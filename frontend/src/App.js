import ToolKit from './components/ToolKit'
import LogView from './components/LogView'

function App() {

  return(
    <main className="main-app">
      <div className="logo">
            <h1>LOG SIGHT</h1>
      </div>
      
      <LogView />
      <ToolKit />

    </main>
  )
}

export default App;
