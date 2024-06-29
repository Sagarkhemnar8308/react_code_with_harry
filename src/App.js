import './App.css';
import React, { useState } from 'react'
import Navbar from './component/navbar';
import Textform from './component/textform';
import Alert from './component/Alert';
import { Aboutus } from './component/Aboutus';
import Counter from './component/counter'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);


  const showAlert = (message, type, color) => {
    setalert({
      message: message,
      type: type,
      color: color
    })

    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  const ToogleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      showAlert(" Dark theme Apply ", "success", "success");
      document.title = 'textUtils - Dark Mode';
      //   setInterval(()=>{
      //   console.log('setInterval is called .....')
      //   }, 1500);
      //   setTimeout(()=>{
      //     console.log('setTimeout is called .....')
      //  }, 1500);
    } else {

      setmode('light')
      showAlert(" Light theme Apply ", "success", "warning");
      document.title = 'textUtils - Light Mode';
    }
  }
  return (
    <Router>
      <Navbar home="Home" title="Your Title" mode={mode} ToogleMode={ToogleMode} />
      <Alert alert={alert} />
      <div>
        <Switch>
          <Route path="/about">
            <Aboutus />
          </Route>
          <Route path="/">
            <Textform title="Enter" />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App;
