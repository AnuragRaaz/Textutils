import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import {
// BrowserRouter as Router,
// Routes,
//  Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, SetAlert] = useState(null);

  const showAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      SetAlert(null);
    }, 700);
  }

  const toggleMode = () => {
    let body = document.body;
    if (mode === 'dark') {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      setMode('light');
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light mode";
    } else {
      body.style.backgroundColor = '#032540';
      body.style.color = "white";
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark mode";
    }
  };

  return (
    <>
    <Navbar title="textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
         <Textform
                heading="Enter text below to analyze"
                mode={mode}
                showAlert={showAlert}
              />
      {/* <Router>
        
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={
             
            } />
          </Routes>
        </div>
      </Router> */}
    </>
  );
}

export default App;
