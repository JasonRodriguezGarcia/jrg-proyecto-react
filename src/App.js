import './App.css';
import {Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './utils/ProtectedRoute';
import ProtectedRouteAdmin from './utils/ProtectedRouteAdmin';
import Admin from './pages/Admin';
import CookieVisitas from './components/CookieVisitas';
import SpeechToText from './components/SpeechToText';
import SpeechQuiz from './components/SpeechQuiz';
import EnglishTests from './components/Navbar/EnglishTests';
function App() {
  return (

    <>
    <header>      
      <Navbar />
      <CookieVisitas />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} isAuthenticated={false}/>}
          />
        <Route
          path="/admin"
          element={<ProtectedRouteAdmin element={<Admin />} isAuthenticated={false}/>}
          /> */}

      </Routes>
      {/* <SpeechToText /> */}
      {/* <SpeechQuiz /> */}
      <EnglishTests />
    </header>
    </>
  );
  
}

export default App;
