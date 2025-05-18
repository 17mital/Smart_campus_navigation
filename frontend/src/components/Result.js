import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./Result.css";

const sourceIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/kml/shapes/placemark_circle.png",
  iconSize: [32, 32],
});

const destinationIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/kml/shapes/flag.png",
  iconSize: [32, 32],
});

function Result() {
  const { state } = useLocation();
  const { source, destination } = state;
  const [route, setRoute] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/shortest-path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: [source.lat, source.lon],
        destination: [destination.lat, destination.lon],
      }),
    })
      .then((res) => res.json())
      .then((data) => setRoute(data.route))
      .catch((err) => console.error("Route error:", err));
  }, [source, destination]);

  return (
    <div>
      <h2>Navigation Path</h2>
      <MapContainer center={[source.lat, source.lon]} zoom={18} style={{ height: "500px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {route.length > 0 && <Polyline positions={route} color="red" weight={5} />}
        <Marker position={[source.lat, source.lon]} icon={sourceIcon}>
          <Popup>{source.name} (Start)</Popup>
        </Marker>
        <Marker position={[destination.lat, destination.lon]} icon={destinationIcon}>
          <Popup>{destination.name} (End)</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Result;