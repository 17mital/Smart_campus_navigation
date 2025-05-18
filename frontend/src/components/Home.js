import React from 'react';
import './HomePage.css'; // Import for styling
import CampusMap from './Aboutus';// Component for displaying interactive map
import ClassroomPage from './home/Classroom';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
    
      <div className="hero-section">
        <h1>Welcome to Smart College Navigator</h1>
        <p>Find your way around campus with ease!</p>
      </div>

      

      <div className="features-section">
        <h2>Explore Campus</h2>
        <div className="features-grid">
          <FeatureCard
            title="LectureRooms"
            icon="📚"
            description="Locate all academic blocks and lecture halls."
            path="/classrooms"
            backgroundImage="lectureroom.png"
          />
          <FeatureCard
            title="Labs"
            icon="🖥️"
            description="Navigate through specialized laboratories."
            path="/labs"
            backgroundImage="labs.png"
          />
          <FeatureCard
            title="Departments"
            icon="🏛️"
            description="Find faculty offices and department wings."
            path="/departments"
            backgroundImage="centerfloor.jpg"
          />
          <FeatureCard
            title="Hostels"
            icon="🏢"
            description="Locate student accommodations."
            path="/hostels"
            backgroundImage="hostel.jpg"
          />
          <FeatureCard
            title="Mess & Canteen"
            icon="🍽️"
            description="Discover dining areas around campus."
            path="/canteen"
            backgroundImage="mess.png"
          />
          <FeatureCard
            title="Library"
            icon="📖"
            description="Locate all libraries and reading rooms."
            path="/library"
            backgroundImage="libarary.jpg"
          />
        </div>
      </div>
      
  
    </div>
  );
};

const FeatureCard = ({ title, icon, description, path,backgroundImage}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div
      className="feature-card"
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        backgroundImage: `url(${require(`../assets/${backgroundImage}`)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div  className="icon"></div>
      <h3 style={{backgroundColor:"brown", color:"white" }}>{title}</h3>
      <p style={{color:"transparent"}}>{description}</p>
      <p style={{color:"transparent"}}>{description}</p>
    </div>

  );
};

export default HomePage;
