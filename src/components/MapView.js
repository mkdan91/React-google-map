import React from 'react';
import { Map, Marker } from 'google-maps-react';
const MapView = (props) => {

    const mapView = () => { 
        return (
            <Map className="Map" xs={12} google={props.google} zoom={14} initialCenter={props.coords} >
                <Marker name={'location'} position={props.coords} />
            </Map>
        );
    }
    return (
        <div className="map-container"> 
             {mapView()}
        </div>
    );
};
export default MapView;