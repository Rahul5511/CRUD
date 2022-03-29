import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddUser from './components/pages/AddUser';
import About from './components/pages/About';
import Contact from './components/pages/Contact'
import View from './components/users/View';
import Edit from './components/users/Edit';
import Footer from './components/navbar/Footer';


const App = () => {
  return(
      <Router>
        <>
          <Navbar/>
         <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="about" element={<About/>}/>
             <Route path="contact" element={<Contact/>}/>
             <Route path="users/add" element={<AddUser/>}/>
             <Route path="users/:id" element={<View/>}/>
             <Route path="users/edit/:id" element={<Edit/>}/>
         </Routes>
          <Footer/>
        </>
      </Router>
     
  )
}
export default App;