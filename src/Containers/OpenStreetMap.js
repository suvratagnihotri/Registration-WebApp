import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function OpenStreetMap(){
    function MapPlaceholder() {
        return (
          <p>
            Map of London.{' '}
            <noscript>You need to enable JavaScript to see this map.</noscript>
          </p>
        )
      }
    // const position = [51.505, -0.09]
    return(
        <MapContainer
      center={[51.505, -0.09]}
      zoom={1}
        style={{ height: '100vh', width: '100wh' }}
      scrollWheelZoom={false}
      placeholder={<MapPlaceholder />}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
    );
}