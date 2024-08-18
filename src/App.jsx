import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Events from './components/Events';
import EventDetail from './components/EventDetail';
import Login from './components/Login';
import SignUp from './components/SignUp';
import DashBoard from './components/DashBoard';
import About from './components/About';
import ProfileForm from './components/ProfileForm';
import History from './components/History';
import MyEvents from './components/MyEvents';
import ProtectedRoute from "./services/ProtectedRoute";  // Import the ProtectedRoute component
import Testimonial from './components/Testimonal';
import HostEvent from './components/HostEvent';
import UpdateEvent from './components/UpdateEvent';
import Users from './components/Users';

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/services" element={<About/>} />
        <Route path="/about" element={<Testimonial/>} />
        <Route
            path="/events"
            element={<ProtectedRoute><Events /></ProtectedRoute>} 
          />
        <Route path="/events/:id" element={<EventDetail/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/profile" element={<ProfileForm/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/my_events" element={<MyEvents/>} />
        <Route path="/host_events" element={<HostEvent/>} />
        <Route path="/update_event/:id" element={<UpdateEvent/>} />
        <Route path="/users" element={<Users/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;