import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import { Route, Routes } from "react-router-dom";
import Events from "./components/Events.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import LoginForm from "./components/auth/LoginForm.tsx";
import SignUpForm from "./components/auth/SignUpForm.tsx";
import OrientationForm from "./components/OrientationForm.tsx";
import ResultsTable from "./components/ResultsTable.tsx";
import { Toaster } from "react-hot-toast";
import React, { useEffect, useState } from "react";
import Sidebar from "./components/admin/Sidebar";
import EventsPanel from "./components/admin/EventsPanel";
import DocumentsPanel from "./components/admin/DocumentsPanel";
import UsersPanel from "./components/admin/UsersPanel";
import Dashboard from "./components/admin/Dashboard.tsx";
import ProtectedRouteUser from './components/router/ProtectedRouteUser.jsx';
import ProtectedRouteAdmin from "./components/router/ProtectedRouteAdmin.jsx";
import { jwtDecode } from "jwt-decode";
import { ca } from './../node_modules/date-fns/locale/ca';

const mockResults = [
  {
    university: "Riverside University",
    specialties: [
      {
        name: "Computer Science",
        availablePlaces: 150,
        requiredScore: 85,
        distance: 12,
      },
      {
        name: "Software Engineering",
        availablePlaces: 100,
        requiredScore: 88,
        distance: 12,
      },
    ],
  },
  {
    university: "Tech Institute",
    specialties: [
      {
        name: "Data Science",
        availablePlaces: 75,
        requiredScore: 82,
        distance: 25,
      },
      {
        name: "Artificial Intelligence",
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
      <Events />
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
    const [activeTab , setActiveTab] = useState('dashboard');
    const renderContent = ()=>{
      switch (activeTab) {
        case 'events':
          
          return <EventsPanel/>;
      case  'documents' :
        return <DocumentsPanel/>;
        case 'users' : 
        return <UsersPanel/>
        default:
          return (
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Users</h3>
                  <p className="text-3xl font-bold text-indigo-600">0</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Upcoming Events</h3>
                  <p className="text-3xl font-bold text-indigo-600">0</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Documents</h3>
                  <p className="text-3xl font-bold text-indigo-600">0</p>
                </div>
              </div>
            </div>
          );
          
      }
    }

    function Navbars(){
      const token = localStorage.getItem('token')
      if (!token) {
        return(<Navbar />)
        
    // console.log(`role ${role}`);
  
      }
      const decod = jwtDecode(token); 
   const role = decod['role'];
   console.log(role)
   
    return (
      <div>
    { role=="admin"?(
          <Sidebar activeTab={activeTab}  setActiveTab={setActiveTab} />
          
        ):(
          <Navbar />
  
        )}
      </div>
      
    );
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbars/>

      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route element={<ProtectedRouteUser/>}>
          <Route path="/orientation" element={<OrientationPage />} />
          <Route path="/events" element={<Events />} />

          {/* </Route> */}
          {/* <Route path='/settings' element={<Settings/>}/> */}
          {/* <Route element={<ProtectedRouteAdmin />}>
            <Route path="/admin" element={<Sidebar/>}>
            {/* <Route path="/Dashboard" element={<Dashboard/>} /> */}
            {/* {renderContent()} */}

            {/* <Route path="/Documents" element={<DocumentsPanel />} />
            <Route path="/Events" element={<EventsPanel />} />
            <Route path="/Users" element={<UsersPanel />} /> */}
            {/* </Route> */}
           
          </Route> 
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
