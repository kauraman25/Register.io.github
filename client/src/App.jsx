import  { useState } from 'react';
import Signup from './Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Home from './Home';

function App() {
     

  return (
    <Router>
       <Routes>
          <Route path='/Register' element={<Signup />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Home' element={<Home />}></Route>
       </Routes>
    </Router>

  );
}

export default App
