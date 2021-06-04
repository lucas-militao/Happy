import React from "react";
import { FiPlus } from "react-icons/fi";
import { MapContainer, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";

import mapMarkerImg from "../images/map-marker.svg";

import "../styles/pages/orphanages-map.css";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Fortaleza</strong>
          <span>Ceará</span>
        </footer>
      </aside>

      <MapContainer
        center={[-3.7928829, -38.4955035]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https//a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
