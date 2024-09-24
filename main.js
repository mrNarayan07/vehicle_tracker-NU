let map = L.map('map').setView([17.385044, 78.486671], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Create carIcon for the endpoint
let carIcon = L.icon({
  iconUrl: 'car.png',
  iconSize: [50, 50],
  iconAnchor: [25, 25],
});

// Create a marker for the starting point (custom pin icon)
let startIcon = L.icon({
  iconUrl: 'location.png',  // A custom start pin image
  iconSize: [40, 40],
  iconAnchor: [12, 40],
});

let currentLocationMarker = L.marker([17.385044, 78.486671], { icon: carIcon }).addTo(map);

// Variables to store the current path, markers
let pathLine;
let startMarker;
let endMarker;
let pathCoordinates = []; // Store path coordinates
let viewingPath = false;  // Track if the path is being viewed

// Function to view current location
function viewCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function (position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      
      map.setView([lat, lon], 13);
      currentLocationMarker.setLatLng([lat, lon]);
      
      // Hide the path when viewing current location
      if (pathLine) {
        map.removeLayer(pathLine);
      }
      if (startMarker) {
        map.removeLayer(startMarker);
      }
      if (endMarker) {
        map.removeLayer(endMarker);
      }
      
      viewingPath = false;
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// Dummy data with different starting and ending points
let dummyData = [
  { "latitude": 17.385044, "longitude": 78.486671, "timestamp": "2024-07-20T10:00:00Z" }, // Start
  { "latitude": 17.386500, "longitude": 78.485000, "timestamp": "2024-07-20T10:05:00Z" },
  { "latitude": 17.388000, "longitude": 78.482500, "timestamp": "2024-07-20T10:10:00Z" },
  { "latitude": 17.387500, "longitude": 78.480000, "timestamp": "2024-07-20T10:15:00Z" },
  { "latitude": 17.385500, "longitude": 78.478000, "timestamp": "2024-07-20T10:20:00Z" }, // End
];

function loadTraveledPath(date) {
  if (date === "2024-07-20") {
    if (pathLine) {
      map.removeLayer(pathLine);
    }
    if (startMarker) {
      map.removeLayer(startMarker);
    }
    if (endMarker) {
      map.removeLayer(endMarker);
    }

    // Convert dummy data to polyline coordinates
    pathCoordinates = dummyData.map(point => [point.latitude, point.longitude]);
    
    // Create the polyline path
    pathLine = L.polyline(pathCoordinates, { color: 'blue' }).addTo(map);
    
    // Set the start and end markers
    let startPoint = pathCoordinates[0];
    let endPoint = pathCoordinates[pathCoordinates.length - 1];
    
    startMarker = L.marker(startPoint, { icon: startIcon }).addTo(map);  // Start as pin
    endMarker = L.marker(endPoint, { icon: carIcon }).addTo(map);  // End as car

    // Fit the map to the bounds of the polyline
    map.fitBounds(pathLine.getBounds());
    
    viewingPath = true;
  }
}

// Function to reset the path view after viewing current location
function resetPath() {
  let selectedDate = document.getElementById('dateSelector').value;
  
  if (!viewingPath) {
    loadTraveledPath(selectedDate);
  }
}
