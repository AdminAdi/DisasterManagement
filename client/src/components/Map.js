import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import '../assets/CSS/Map.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fix the default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl
});

const Map = ({ locations, defaultZoom = 5 }) => {
    // Center map on India (approximate center: Madhya Pradesh)
    const defaultPosition = [22.9734, 78.6569]; // [Latitude, Longitude]

    return (
        <div className='map-container'>
            <MapContainer center={defaultPosition} zoom={defaultZoom} style={{ height: "100%", width: "100%" }}>
                {/* OpenStreetMap India Tiles */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap India</a>'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Loop through locations and add markers */}
                {locations.map((location, idx) => (
                    <Marker key={idx} position={location.position}>
                        <Popup>{location.popupText}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export { Map };
