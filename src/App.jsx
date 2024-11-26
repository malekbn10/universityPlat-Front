import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import { Route, Routes } from 'react-router-dom';
import Events from './components/Events.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import LoginForm from './components/auth/LoginForm.tsx';
import SignUpForm from './components/auth/SignUpForm.tsx';
import OrientationForm from './components/OrientationForm.tsx';
import ResultsTable from './components/ResultsTable.tsx';
import {Toaster} from 'react-hot-toast'
<<<<<<< HEAD
import Settings from './components/Settings.jsx';
=======
import React, { useState } from 'react';
import Sidebar from './components/admin/Sidebar';
import EventsPanel from './components/admin/EventsPanel';
import DocumentsPanel from './components/admin/DocumentsPanel';
import UsersPanel from './components/admin/UsersPanel';
import Dashboard from './components/admin/Dashboard.tsx';
>>>>>>> e73851aa19bb3d3f53d0c797f9aae19d36c2e8df


const mockResults = [
  {
    university: 'Riverside University',
    specialties: [
      {
        name: 'Computer Science',
        availablePlaces: 150,
        requiredScore: 85,
        distance: 12,
      },
      {
        name: 'Software Engineering',
        availablePlaces: 100,
        requiredScore: 88,
        distance: 12,
      },
    ],
  },
  {
    university: 'Tech Institute',
    specialties: [
      {
        name: 'Data Science',
        availablePlaces: 75,
        requiredScore: 82,
        distance: 25,
      },
      {
        name: 'Artificial Intelligence',
        availablePlaces: 50,
        requiredScore: 90,
        distance: 25,
      },
    ],
  },
];


function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Events/>
      <Contact />
    </div>
  );
}

function OrientationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <OrientationForm />
      <ResultsTable results={mockResults} />
    </div>
  );
}
function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>
        <Toaster position='top-right' toastOptions={{duration:3000 }}/>
        <main className="flex-grow">
          <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/orientation" element={<OrientationPage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/settings' element={<Settings/>}/>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
          </Routes>
          <Routes path="admin">
            <Route path="/Dashboard" element ={<Dashboard/>} />
            <Route path="/Documents" element ={<DocumentsPanel/>} />
            <Route path="/Events" element ={<EventsPanel/>} />
            <Route path="/Users" element ={<UsersPanel/>} />

          </Routes>
        </main>
        <Footer/>
</div>
  );
}

export default App;
