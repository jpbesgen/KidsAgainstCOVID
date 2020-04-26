import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import db from "../stores/DBStore";

import hi from "../../img/heart.png";

const mapStyles = {
    width: '80%',
    height: '50vh'
};

const google = window.google;

export class MapComponent extends React.Component {
    constructor(props) {
        super(props);

        this.renderMarkers = this.renderMarkers.bind(this);
    }
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        markers: []
    };

    componentDidMount() {
        db.on("LettersUpdated", this.renderMarkers);
        this.renderMarkers();
    }

    componentWillUnmount() {
        
    }

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
        // const locations = [[39.82, -98.5795], [36.823, -95.5795], [31.832, -106.391], [32.767, -96.778],
        // [40.714, -74.012], [40.724, -74.122], [34.032, -119.134],
        // [37.232, -121.791], [32.644, -117.138], [42.339, -71.054]];
        let letters = db.getLetters();
        let locations = letters.map((l) => [l.lat, l.lng, l.url, l.hospital]);
        
        console.log(locations);
        
        let markers = (locations.map((location) => {
            return <Marker
                key={location[2]}
                name={location[3]}
                onClick={this.onMarkerClick}
                position={{
                    lat: location[0],
                    lng: location[1],
                }}
                icon={{
                    url: location[2],
                    anchor: new google.maps.Point(32, 32),
                    scaledSize: new google.maps.Size(24, 24)
                }}
            />
        }));

        this.setState({
            markers,
        });
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
                {this.state.markers}
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
