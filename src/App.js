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
import EnglishTests from './components/EnglishTest/EnglishTests';
import MinimalistPage from './pages/MinimalistPage';

function App() {
  return (

    <>
    <header>      
      {/* <Navbar /> */}
      <CookieVisitas />

      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/minimalist" element={<MinimalistPage />}></Route>
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
      {/* <MinimalistPage /> */}

      {
        // https://creator.voiceflow.com/
        (function(d, t) {
            var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
            v.onload = function() {
              window.voiceflow.chat.load({
                verify: { projectID: '67e6d25aa64cae9480b97496' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production',
                voice: {
                  url: "https://runtime-api.voiceflow.com"
                }
              });
            }
            v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
        })(document, 'script')

      }
    </header>
    </>
  );
  
}

export default App;
