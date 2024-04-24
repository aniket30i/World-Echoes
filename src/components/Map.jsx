import React, { useEffect, useState } from "react";
import styles from "./Map.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useUrlPositon } from "../hooks/useUrlPosition";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";

function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const { cities } = useCities();

  // const {
  //   isLoading: isLoadingPosition,
  //   position: geoloactionPosition,
  //   getPosition,
  // } = useGeolocation();

  // useEffect(
  //   function () {
  //     if (geoloactionPosition)
  //       setMapPosition([geoloactionPosition.lat, geoloactionPosition, lng]);
  //   },
  //   [geoloactionPosition]
  // );

  // useEffect(
  //   function () {
  //     if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  //   },
  //   [mapLat, mapLng]
  // );

  return (
    <div className={styles.mapContainer}>
      {/* {!geoloactionPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </Button>
      )} */}
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        {/* <ChangeCenter position={mapPosition} /> */}
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({}) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => {
      console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
