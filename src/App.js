import logo from './logo.svg';
import Navbar from './component/Navbar';
import "D:/React Js/new-app/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "D:/React Js/new-app/node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import './index.css'
import Home from './component/Home';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import About from "./component/About";
import Contact from "./component/Contact"
import Service from "./component/Service"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
