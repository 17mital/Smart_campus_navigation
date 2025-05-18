import React, { useState } from 'react';
import './Department.css';

const departmentDetails = [
  {
    name: 'Computer Science (CS)',
    description: 'Focuses on computing, programming, and software development.',
    location: 'A-Wing, 2nd Floor',
  },
  {
    name: 'Computer Engineering (CE)',
    description: 'Deals with the design, devlopment, and programming data structures.',
    location: 'B-Wing, 1st Floor',
  },
  {
    name: 'Information Technology (IT)',
    description: 'Emphasizes on networking, cybersecurity, and data management.',
    location: 'C-Wing, 3rd Floor',
  },
  {
    name: 'Artificial Intelligence & Machine Learning (AIML)',
    description: 'Specialized in AI, data science, and machine learning technologies.',
    location: 'D-Wing, 4th Floor',
  },
];

const DepartmentPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
  };

  const handleBack = () => {
    setSelectedDepartment(null);
  };

  return (
    <div className="department-page">
      <h1>Departments</h1>
      {selectedDepartment ? (
        <div className="department-details">
          <h2>{selectedDepartment.name}</h2>
          <p>{selectedDepartment.description}</p>
          <p><strong>Location:</strong> {selectedDepartment.location}</p>
          <button onClick={handleBack}>Back to Departments</button>
        </div>
      ) : (
        <div className="department-list">
          {departmentDetails.map((department, index) => (
            <div key={index} className="department-card" onClick={() => handleDepartmentClick(department)}>
              <h3>{department.name}</h3>
              <p>{department.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DepartmentPage;