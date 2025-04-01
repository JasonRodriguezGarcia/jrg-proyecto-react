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
import Gemini from './components/Gemini/Gemini';
import MaterialDesign from './components/Material.Design';

function App() {
  return (

    <>
    <header>      
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* <Route path="/minimalist" element={<MinimalistPage />}></Route> */}
        {/* <Route path="/dashboard"
            element={<ProtectedRoute element={<Dashboard />} isAuthenticated={false}/>}
            />
            <Route path="/admin"
            element={<ProtectedRouteAdmin element={<Admin />} isAuthenticated={false}/>}
            /> */}

      </Routes>

      <Gemini />
      {/* <MaterialDesign /> */}


      <CookieVisitas />
    </header>
    </>
  );
  
}

export default App;
