import { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = '#032540';
      document.body.style.color = 'white';
      document.title = "Textutils - Dark mode";
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = "Textutils - Light mode";
    }
    localStorage.setItem('mode', mode); // Save mode changes in localStorage
  }, [mode]);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };
 const removeBodyClasses = ()=>{
  document.body.classList.remove("bg-light")
  document.body.classList.remove("bg-dark")
  document.body.classList.remove("bg-warning")
  document.body.classList.remove("bg-danger")
  document.body.classList.remove("bg-success")
 }
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log (cls)
    document.body.classList.add("bg-" +cls);
    setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
    showAlert(mode === 'dark' ? "Light mode has been enabled" : "Dark mode has been enabled", "success" );
  };

  return (
    <Router>
      <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Textform showAlert={showAlert} heading="Try Textutils - Word counter, Character counter, Remove extra spaces" mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div> 
    </Router>
  );
}

export default App;
