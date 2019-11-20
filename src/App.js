import React from 'react';
import Bookings from './components/Bookings';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header';
function App() {
  return (
   <div className="container">
     <Header headerText="Adslot" />
     <Bookings />
    </div>
  );
}

export default App;
