import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import hi from "../../img/heart.png";

const mapStyles = {
    width: '80%',
    height: '50vh'
};

const google = window.google;

export class MapComponent extends React.Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    renderMarkers() {
        const locations = [[39.82, -98.5795], [36.823, -95.5795], [31.832, -106.391], [32.767, -96.778],
        [40.714, -74.012], [40.724, -74.122], [34.032, -119.134],
        [37.232, -121.791], [32.644, -117.138], [42.339, -71.054]];
        
        return (locations.map((location) => {
            return <Marker
                name={'Marker'}
                onClick={this.onMarkerClick}
                position={{
                    lat: location[0],
                    lng: location[1],
                }}
                icon={{
                    url: "https://firebasestorage.googleapis.com/v0/b/kidsagainstcovid.appspot.com/o/1200px-Heart_corazo%CC%81n.svg.png?alt=media&token=29bc3b70-f26e-4c32-8510-36265854631c",
                    anchor: new google.maps.Point(32, 32),
                    scaledSize: new google.maps.Size(24, 24)
                }}
            />
        }));
    }


    render() {
        return (
            <Map
                google={this.props.google}
                zoom={4}
                style={mapStyles}
                initialCenter={{
                    lat: 39.8283,
                    lng: -98.5795
                }}
                onClick={this.onMapClicked}
            >
                {this.renderMarkers()}
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCnN6DpYAEGL7l0Hpj04RM4HrAhhDAxIM0')
})(MapComponent)
