import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export function PropertyMap() {
  return (
    <MapContainer
      center={[-34.959, -54.943] as unknown as any}
      zoom={15}
      style={{
        height: "650px",
        width: "100%",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={[-34.959, -54.943]}>
        <Popup>
          Villa Moderna Frente al Mar
          <br />
          USD 2.400.000
        </Popup>
      </Marker>

      <Marker position={[-34.952, -54.931]}>
        <Popup>
          Penthouse Vista Panorámica
          <br />
          USD 1.200.000
        </Popup>
      </Marker>

      <Marker position={[-34.901, -54.793]}>
        <Popup>
          Casa José Ignacio
          <br />
          USD 1.800.000
        </Popup>
      </Marker>
    </MapContainer>
  );
}
