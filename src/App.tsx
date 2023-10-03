import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {NavBar} from './components/molecules/navBar'
import { Home } from './screens/home'
import { SearchName } from './screens/searchName';

function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search-name" element={<SearchName />}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
