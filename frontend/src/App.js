// import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Landing from './pages/Landing';
import {useState} from 'react'
import SignIn from './pages/SignIn';
import DrugMD from './pages/DrugMD';
import Dashboard from './pages/Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <Router>
      <Navigation loginState={loggedIn} handleLoginState={setLoggedIn} />
      <main className='pt-[90px] min-h-[100vh] max-w-3xl w-11/12 mx-auto'>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path="/signin" element={<SignIn  handleLoginState={setLoggedIn} />} />
          <Route path="/drug-md" element={<DrugMD />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
