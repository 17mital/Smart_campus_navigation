import { useState } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";

const locations = [
  { name: "Faculties Quarter", lat: 21.2864303, lon: 74.8410738 },
  { name: "Cricket Ground", lat: 21.2846544, lon: 74.8418520 },
  { name: "New Boys Hostel", lat: 21.2853902, lon: 74.8407491 },
  { name: "Mess", lat: 21.2859820, lon: 74.8422553 },
  { name: "Old Boys Hostel", lat: 21.2863019, lon: 74.8424442 },
  { name: "Agriculture Building", lat: 21.2866887, lon: 74.8422556 },
  { name: "Workshop Building", lat: 21.2865413, lon: 74.8429658 },
  { name: "Girls Hostel", lat: 21.2844745, lon: 74.8431652 },
  { name: "Amphitheater", lat: 21.2850562, lon: 74.8437096 },
  { name: "C wing", lat: 21.2845176, lon: 74.8437511 },
  { name: "Academic Building", lat: 21.2848703, lon: 74.8444140 },
  { name: "B wing", lat: 21.2842568, lon: 74.8448474 },
  { name: "Student Lounge", lat: 21.2847104, lon: 74.8450475 },
  { name: "A wing", lat: 21.2852268, lon: 74.8451298 },
  { name: "Aditi Canteen", lat: 21.2853536, lon: 74.8445531 },
  { name: "Main Gate", lat: 21.2853347, lon: 74.8458737 },
];

function Search() {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!source || !destination || source.name === destination.name) {
      alert("Please select different source and destination.");
      return;
    }

    navigate("/result", { state: { source, destination } });
  };

  return (
    <div>
      <h2>Campus Path Finder</h2>
      <form onSubmit={handleSubmit}>
        <label>Source:</label>
        <select onChange={(e) => setSource(locations.find(l => l.name === e.target.value))} required>
          <option value="">Select Source</option>
          {locations.map(loc => <option key={loc.name} value={loc.name}>{loc.name}</option>)}
        </select>

        <label>Destination:</label>
        <select onChange={(e) => setDestination(locations.find(l => l.name === e.target.value))} required>
          <option value="">Select Destination</option>
          {locations.map(loc => <option key={loc.name} value={loc.name}>{loc.name}</option>)}
        </select>

        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
