import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {NavBar} from './components/molecules/navBar'
import { Home } from './screens/home'

function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <Routes>
          <Route path="/" element={<Home />}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
