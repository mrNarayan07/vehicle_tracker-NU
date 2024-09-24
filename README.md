# Vehicle Path Tracking with Leaflet

## Description

This project is a web-based vehicle path tracking application using **Leaflet** for map visualization. The application allows users to:
- **Track the vehicle's traveled path** on a map based on latitude and longitude coordinates.
- **View the current location** of the vehicle in real-time, with automatic updates from the browser's geolocation feature.
- **Display a route** with distinct starting and ending points. The starting point is marked with a custom pin, and the endpoint is represented by a car icon.
- **Toggle between viewing the traveled path and the current location** seamlessly.

The path is drawn on the map using a polyline, and users can select a date to view the traveled path for that day. The path is displayed based on GPS coordinates and time, ensuring smooth map interaction and responsiveness.

## Features
- **Map Visualization**: View the path traveled by a vehicle using Leaflet and OpenStreetMap.
- **Real-Time Location Tracking**: Automatically fetch the vehicle's current location using the browser's geolocation API.
- **Custom Markers**: The start point is shown as a pin icon, and the end point is represented by a car icon.
- **Toggle View**: Switch between viewing the current location and the previously traveled path.
- **Smooth Map Interaction**: The map view adjusts dynamically to display either the path or the current location without overlaps or conflicts.

## Technologies Used
- **Leaflet.js**: A powerful open-source JavaScript library for mobile-friendly interactive maps.
- **OpenStreetMap**: The tile server providing map data.
- **HTML, CSS, JavaScript**: The frontend stack for rendering the map and managing user interaction.
- **Geolocation API**: For tracking the vehicle's current location in real-time.

---

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Customization](#customization)
4. [Contributing](#contributing)
5. [License](#license)

---

## Installation

### Prerequisites
- A basic understanding of HTML, CSS, and JavaScript is recommended.
- Node.js (optional, if you're planning to extend the project with backend functionality).

### Step-by-Step Guide

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mrNarayan07/vehicle_tracker-NU.git
   
2. ***Open the Project Navigate into the project directory:***
   ```bash
    cd vehicle-path-tracking
3. ***Open the Project in a Browser Simply open the index.html file in any modern web browser.***
   ```bash
   open index.html

## Usage

- **View Traveled Path**: Select a date from the dropdown menu to load the traveled path for that day. The path will be displayed on the map with distinct starting and ending points.

- **View Current Location**: Click the "View Current Location" button to see the real-time position of the vehicle. The path will disappear while viewing the current location, but you can switch back to view the path.

- **Custom Markers**: The map will show the start point with a custom marker pin and the end point with a car icon.
