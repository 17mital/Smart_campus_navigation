import React, { useState } from 'react';
import './MessCanteenpage.css';
import { useNavigate } from 'react-router-dom';

const facilities = [
  { name: 'Girls Hostel Mess', location: 'Hostel Block A', path: 'Near Block A Entrance' },
  { name: 'Boys Hostel Mess', location: 'Hostel Block B', path: 'Behind Block B' },
  { name: 'Aditi Canteen', location: 'Main Campus', path: 'Adjacent to Library' },
];

const MessCanteenPage = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);
  const navigate = useNavigate();

  const handleFacilityClick = (facility) => {
    setSelectedFacility(facility);
  };

  const handleBack = () => {
    setSelectedFacility(null);
  };

  return (
    <div className="mess-canteen-page">
      <h1>Mess & Canteen</h1>
      {selectedFacility ? (
        <div className="facility-details">
          <h2>{selectedFacility.name}</h2>
          <p><strong>Location:</strong> {selectedFacility.location}</p>
          <p><strong>How to Reach:</strong> {selectedFacility.path}</p>
          <button onClick={handleBack}>Back to List</button>
        </div>
      ) : (
        <div className="facility-list">
          {facilities.map((facility, index) => (
            <div key={index} className="facility-card" onClick={() => handleFacilityClick(facility)}>
              <h3>{facility.name}</h3>
              <p>{facility.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessCanteenPage;