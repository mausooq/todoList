import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import './App.css';
import HOME from './home.jsx'


function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<HOME />} />
    </Routes>
    </Router>
    </>
  )
}

export default App
