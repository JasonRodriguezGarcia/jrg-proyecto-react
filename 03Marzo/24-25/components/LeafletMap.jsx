import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Required for proper rendering
import jsonp from 'jsonp';
function LeafletMap() {
 
const position = [43.315238585264154, -1.9906867941271458];

useEffect(()=> {
    jsonp('https://opendata.euskadi.eus/contenidos/ds_recursos_turisticos/museos_centros_interpretacion/opendata/museos.jsonp', { name: 'jsonCallback' }, function (err, data) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(data);
        }
      });
    // fetch("https://opendata.euskadi.eus/contenidos/ds_recursos_turisticos/museos_centros_interpretacion/opendata/museos.jsonp")
    // .then(respuesta => {
    //     respuesta.json()
    //     console.log(respuesta.jsonCallback)
    // })
    // .then(data => {
    //     console.log(data)
    // })
}, [])
return (
    <div>
      <h1>Leaflet Mapa</h1>
      <MapContainer
        center={[43.31458286118951, -1.99170603259654]} // Coordinadas de Madrid, España
        zoom={13} 
        scrollWheelZoom={true} 
        style={{ height: "400px", width: "100%" }}
      >
        {/* <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        /> */}
        <TileLayer // otro estilo de mapas
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
            attribution="&copy; <a href='https://www.esri.com'>Esri</a> &copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
        />

        <Marker position={position}>
        <Popup>
            Aqui estas
        </Popup>
        </Marker>
        
      </MapContainer>
      
    </div>
  );
}

export default LeafletMap;