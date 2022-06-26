import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import BoiteOutil from './pages/BoiteOutil';
import Home from './pages/Home';
import Theme from './pages/Theme';
import Error from './pages/Error';
import Navigation from './components/Navigation'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Theme" element={<Theme />} />
        <Route path="/BoiteOutil" element={<BoiteOutil />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
