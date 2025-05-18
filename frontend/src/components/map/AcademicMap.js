import React from 'react';
import academic_build from 'C:/Users/mital/Downloads/Project1_ML/smart-college-navigator/frontend/src/assets/academic_wing.png' ;

const AcademicMap= () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Welcome to Academic Building map</h1>
      <img
        src={academic_build}
        alt="Academic Campus Map"
        style={{
          width: '100%',
          maxWidth: '800px',
          border: '2px solid #ccc',
          borderRadius: '8px',
          background:"white",
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      />
    </div>
  );
};

export default AcademicMap;
