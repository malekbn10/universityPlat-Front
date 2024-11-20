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
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/orientation" element={<OrientationPage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
          </Routes>
        </main>
        <Footer/>
</div>
  );
}

export default App;
