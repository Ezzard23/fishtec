import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
    </Router>
    <App />
  </React.StrictMode>
);


const port = process.env.PORT || 8080;
root.listen(port, () => console.log('App is listening'));
 

reportWebVitals();
