import './App.css' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import HomePage from './pages/HomePage' 
import LoginPage from './pages/LoginPage' 
import Header from './components/Header' 
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import AllRecords from './pages/AllRecords'
import { TestPage } from './pages/TestPage'
function App() {
  return (
    <div className=' h-[100vh] text-[18px] '>
      <Router>
        <AuthProvider>
        <Header/>
        <Routes>
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact  path='/' element={<HomePage />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/allrecords' element={<AllRecords/>}/>
          <Route path='/test' element={<TestPage/>} />
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  ) 
}

export default App 