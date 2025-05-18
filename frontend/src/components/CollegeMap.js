import React, { useState } from "react";
import "./CollegeMap.css";
import mapImage from "../assets/campus_map.png";

const locations = [
  { id: 1, name: "Main Gate", link: "/main-gate", top: "87.9%", left: "9.7%" },
  { id: 2, name: "Academic Bloack", link: "/academic_building", top: "62%", left: "33%" },
  { id: 3, name: "Culture Block", link: "/Culture_block", top: "61%", left: "21.7%" },
  { id: 4, name: "Aditi Canteen", link: "/aditi_canteen", top: "74%", left: "31.6%" },
  { id: 5, name: "Amphitheater", link: "/Amphitheater", top: "60%", left: "43.6%" },
  { id: 6, name: "Girls Hostel", link: "/girls_hostel", top: "40%", left: "48.4%" },
  { id: 7, name: "Old-boys Hostel", link: "/old_boy_hostel", top: "64%", left: "56.4%" },
  { id: 8, name: "Main Ground", link: "/ground", top: "33%", left: "67.6%" },
  { id: 9, name: "Common Mess", link: "/common_mess", top: "81.2%", left: "70.1%" },
  { id: 10, name: "New Boys Hostel", link: "/new_boys_hostel", top: "45.7%", left: "81.5%" },
  { id: 11, name: "BasketBall Court", link: "/basketball_court", top: "61.3%", left: "69.8%" },
  { id: 12, name: "Workshop Building", link: "/workshop_building", top: "93%", left: "59.8%" },
  { id: 13, name: "Faculties Qaurter", link: "/faculties_quarter", top: "65%", left: "89%" },
  { id: 14, name: "Agriculture Department", link: "/Agri_Building", top: "92%", left: "70%"},
  { id: 15, name: "Football Court", link: "/football_court", top: "16.4%", left: "90.6%"},
  { id: 16, name: "Lotus Pond", link: "/lotuss_pond", top: "50.2%", left: "53.9%"},
  
];

const CollegeMap = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  return (
    <div className="college-map-container">
      <img src={mapImage} alt="College Map" className="college-map-image" />
      {locations.map((location) => (
        <div
          key={location.id}
          className="map-location"
          style={{ top: location.top, left: location.left }}
          onMouseEnter={() => setHoveredLocation(location.id)}
          onMouseLeave={() => setHoveredLocation(null)}
        >
          {/* Display the ID as a button */}
          <button
            className="location-button"
            onClick={() => (window.location.href = location.link)}
          >
            {location.id}
          </button>
          {/* Display the location name on hover */}
          {hoveredLocation === location.id && (
            <span className="location-name">{location.name}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CollegeMap;
