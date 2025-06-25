"use client";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position: [number, number] = [10.772774, 106.705254];

const ContactMap = () => {
  return (
    <div className="relative md:w-1/2 md:h-[410px] lg:h-[440px] h-[310px]">
      <MapContainer
        center={position}
        zoom={17}
        scrollWheelZoom={false}
        className="h-full w-full z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker
          position={position}
          icon={L.icon({
            iconUrl: "/icons/location.svg",
            iconSize: [64, 64],
            iconAnchor: [32, 64],
          })}
        >
          <Popup>📍 Our Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;
