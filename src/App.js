import './App.css';
import {Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact';
import CookieVisitas from './components/CookieVisitas';
import Suscribe from './pages/Suscribe';
import Video from './pages/Video';
import Footer from './pages/Footer';


function App() {
  return (

    <>
    <header>      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/suscribe" element={<Suscribe />}></Route>
        <Route path="/video" element={<Video />}></Route>
        {/* ruta dinámica añadiendo un parámetro
        /coches/100
        /coches/2
        /coches/ford
        */}
        {/* <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} isAuthenticated={false}/>}
          />
        <Route
          path="/admin"
          element={<ProtectedRouteAdmin element={<Admin />} isAuthenticated={false}/>}
          /> */}
         {/* <Route path="/buscar" element={<BuscadorResultadoPage />} /> */}

      </Routes>
      <Footer />
      <CookieVisitas />
    </header>
    </>
  );
  
}

export default App;
