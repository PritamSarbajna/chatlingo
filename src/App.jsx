import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Hero, Login, Register } from './components'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
