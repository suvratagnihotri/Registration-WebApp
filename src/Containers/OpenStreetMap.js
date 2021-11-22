import 'leaflet/dist/leaflet.css';
import { MapsComponent, LayersDirective, NavigationLineDirective, LayerDirective, Zoom, MarkersDirective, NavigationLine, NavigationLinesDirective, MarkerDirective, Marker, Inject } from '@syncfusion/ej2-react-maps';

export default function OpenStreetMap(){
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        console.log("Latitude is :", latitude);
        console.log("Longitude is :",longitude );
      });
    return(
        
        <MapsComponent style={{width:100,height:100}} id="maps" doubleClick={true} scrollWheelZoom = { true } zoomSettings={{ enable: true, toolbars: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'] }}>
            {/* <Inject services={[Zoom]}/> */}
            <Inject services={[Marker, NavigationLine, Zoom]}/>
                <LayersDirective>
                    <LayerDirective layerType='OSM'>
                        <MarkersDirective>
                            <MarkerDirective visible={true} height={25} width={15} dataSource={[
    {
        latitude: 28.603112,
        longitude: 77.366885,
        name: "California"
    },
    {
        latitude: 28.7041,
        longitude: 77.1025,
        name: "New York"
    }
]}>
                            </MarkerDirective>
                        </MarkersDirective>
                        <NavigationLinesDirective>
                            <NavigationLineDirective visible={true} latitude={[28.603112, 28.7041]} longitude={[77.366885, 77.1025]} color="blue"  width={5}/>
                        </NavigationLinesDirective>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
    );
}