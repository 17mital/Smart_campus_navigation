import React, { useState } from 'react';
import './Hostel.css';

const hostelDetails = [
  {
    name: 'Girls Hostel',
    description: 'A secure and comfortable living space for female students.',
    location: 'East Campus',
  },
  {
    name: 'Old Boys Hostel',
    description: 'The oldest hostel for boys, known for its vibrant community.',
    location: 'North Campus',
  },
  {
    name: 'New Boys Hostel',
    description: 'Recently built hostel with modern amenities.',
    location: 'West Campus',
  },
];

const HostelPage = () => {
  const [selectedHostel, setSelectedHostel] = useState(null);

  const handleHostelClick = (hostel) => {
    setSelectedHostel(hostel);
  };

  const handleBack = () => {
    setSelectedHostel(null);
  };

  return (
    <div className="hostel-page">
      <h1>Hostels</h1>
      {selectedHostel ? (
        <div className="hostel-details">
          <h2>{selectedHostel.name}</h2>
          <p>{selectedHostel.description}</p>
          <p><strong>Location:</strong> {selectedHostel.location}</p>
          <button onClick={handleBack}>Back to Hostels</button>
        </div>
      ) : (
        <div className="hostel-list">
          {hostelDetails.map((hostel, index) => (
            <div key={index} className="hostel-card" onClick={() => handleHostelClick(hostel)}>
              <h3>{hostel.name}</h3>
              <p>{hostel.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HostelPage;