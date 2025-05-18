import React, { useState } from 'react';
import './Classroom.css';
import { useNavigate } from 'react-router-dom';

const classrooms = [
    { name: 'LR 1', location: 'Block A, 1st Floor', path: 'Path from Main Gate' },
    { name: 'LR 2', location: 'Block B, 2nd Floor', path: 'Path from Library' },
    { name: 'LR 3', location: 'Block C, 3rd Floor', path: 'Path from Canteen' },
    { name: 'LR 4', location: 'Block D, Ground Floor', path: 'Path from Hostel' },
    { name: 'LR 5', location: 'Block E, 1st Floor', path: 'Path from Sports Ground' },
    { name: 'LR 6', location: 'Block F, 2nd Floor', path: 'Path from Auditorium' },
    { name: 'LR 7', location: 'Block G, 3rd Floor', path: 'Path from Parking Lot' },
    { name: 'LR 8', location: 'Block H, Ground Floor', path: 'Path from Swimming Pool' },
    { name: 'LR 9', location: 'Block I, 1st Floor', path: 'Path from Workshop' },
    { name: 'LR 10', location: 'Block J, 2nd Floor', path: 'Path from Mess' },
    { name: 'LR 11', location: 'Block K, 3rd Floor', path: 'Path from New Boys\' Hostel' },
    { name: 'LR 12', location: 'Block L, Ground Floor', path: 'Path from Girls\' Hostel' },
    { name: 'LR 13', location: 'Block M, 1st Floor', path: 'Path from Academic Building' },
    { name: 'LR 14', location: 'Block N, 2nd Floor', path: 'Path from Library' },
    { name: 'LR 15', location: 'Block O, 3rd Floor', path: 'Path from Main Gate' },
    { name: 'LR 16', location: 'Block P, Ground Floor', path: 'Path from Sports Ground' },
    { name: 'LR 17', location: 'Block Q, 1st Floor', path: 'Path from Hostel' },
    { name: 'LR 18', location: 'Block R, 2nd Floor', path: 'Path from Gym' },
    { name: 'LR 19', location: 'Block S, 3rd Floor', path: 'Path from Swimming Pool' },
    { name: 'LR 20', location: 'Block T, Ground Floor', path: 'Path from Workshop' },
    { name: 'LR 21', location: 'Block U, 1st Floor', path: 'Path from Parking Lot' },
    { name: 'LR 22', location: 'Block V, 2nd Floor', path: 'Path from Academic Building' },
    { name: 'LR 23', location: 'Block W, 3rd Floor', path: 'Path from New Boys\' Hostel' },
    { name: 'LR 24', location: 'Block X, Ground Floor', path: 'Path from Canteen' }

];

const ClassroomPage = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigate = useNavigate();

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  const handleBack = () => {
    setSelectedRoom(null);
  };

  return (
    <div className="classroom-page">
      <h1>Classrooms</h1>
      {selectedRoom ? (
        <div className="room-details">
          <h2>{selectedRoom.name}</h2>
          <p><strong>Location:</strong> {selectedRoom.location}</p>
          <p><strong>How to Reach:</strong> {selectedRoom.path}</p>
          <button onClick={handleBack}>Back to List</button>
        </div>
      ) : (
        <div className="room-list">
          {classrooms.map((room, index) => (
            <div key={index} className="room-card" onClick={() => handleRoomClick(room)}>
              <h3>{room.name}</h3>
              <p>{room.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClassroomPage;