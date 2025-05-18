import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Search from './components/Search';
import Result from './components/Result'; // Import Result component
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CampusMap from './components/Aboutus';
import Map from './components/CollegeMap';
import 'leaflet/dist/leaflet.css';

import HomePage from './components/Home';
import ContactUs from './components/Contact';
import ClassroomPage from './components/home/Classroom';
import MessCanteenPage from './components/home/MessCanteenpage';
import LibraryPage from './components/home/Library';
import HostelPage from './components/home/Hostel';
import DepartmentPage from './components/home/Department';
import LabsPage from './components/home/Labs';
import AcademicMap from './components/map/AcademicMap';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} /> 
        <Route path="/result" element={<Result />} /> S
        <Route path="/map" element={<Map />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/aboutus" element={<CampusMap />} />
        <Route path="/classrooms" element={<ClassroomPage />} />
        <Route path="/canteen" element={<MessCanteenPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/hostels" element={<HostelPage />} />
        <Route path="/departments" element={<DepartmentPage />} />
        <Route path="/labs" element={<LabsPage />} />
        <Route path="/academic_building" element={<AcademicMap />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
