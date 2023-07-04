import './App.css' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import HomePage from './pages/HomePage' 
import LoginPage from './pages/LoginPage' 
import Header from './components/Header' 
import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact  path='/' element={<HomePage />} />
          </Route>
         
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  ) 
}

export default App 