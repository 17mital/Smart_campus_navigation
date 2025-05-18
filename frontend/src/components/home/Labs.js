import React, { useState } from 'react';
import './Labs.css';

const labDetails = [
  {
    name: 'Computer Networks Lab',
    description: 'Lab equipped for network simulations and configurations.',
    location: 'A-Wing, Room 204',
  },
  {
    name: 'DBMS Lab',
    description: 'Dedicated to database management and SQL practice.',
    location: 'B-Wing, Room 105',
  },
  {
    name: 'Software Engineering Lab',
    description: 'Designed for software design and development projects.',
    location: 'C-Wing, Room 302',
  },
  {
    name: 'Advanced Programming Lab',
    description: 'Focuses on competitive coding and advanced programming.',
    location: 'D-Wing, Room 401',
  },
  {
    name: 'Bosch Lab',
    description: 'Specialized lab for automotive and industrial training.',
    location: 'Tech Block, Room 101',
  },
];

const LabsPage = () => {
  const [selectedLab, setSelectedLab] = useState(null);

  const handleLabClick = (lab) => {
    setSelectedLab(lab);
  };

  const handleBack = () => {
    setSelectedLab(null);
  };

  return (
    <div className="labs-page">
      <h1>Labs</h1>
      {selectedLab ? (
        <div className="lab-details">
          <h2>{selectedLab.name}</h2>
          <p>{selectedLab.description}</p>
          <p><strong>Location:</strong> {selectedLab.location}</p>
          <button onClick={handleBack}>Back to Labs</button>
        </div>
      ) : (
        <div className="lab-list">
          {labDetails.map((lab, index) => (
            <div key={index} className="lab-card" onClick={() => handleLabClick(lab)}>
              <h3>{lab.name}</h3>
              <p>{lab.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LabsPage;