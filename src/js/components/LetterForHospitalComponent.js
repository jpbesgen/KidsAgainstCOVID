import React from "react";

import HospitalCard from './HospitalCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';
import Autocomplete from 'react-google-autocomplete';

export default class LetterForHospitalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip_code: "",
            lat: "",
            lng: "",
            hospitals: [],
        }

        this.handleCardClicked = this.handleCardClicked.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        
    }

    getZipCodeFromGooglePlace(place) {
        let obj = place.address_components.find(obj => obj.types.includes("postal_code"));
        return obj.long_name;
    }

    getLatAndLongFromGooglePlace(place) {
        return [place.geometry.location.lat, place.geometry.location.lng];
    }

    getClosestHospitals() {
        const apiParams = {
            app_name: 'testing',
            zip_code: this.state.zip_code,
            radius_mi: 30,
            resource_types: JSON.stringify(['all']),
            org_types: JSON.stringify(['hospital']),
        }
        axios.get('https://covid-19-hospitals.now.sh/api/fetch-hospitals?', {
            params: apiParams,
        })
        .then(res => {
            console.log(res.data);
	    	this.setState({ hospitals: res.data.locations });
        })
    }

    renderHospitalSearchResults() {
        const top5 = this.renderHospitalList();
		return (
            <>
			<div className="hospital_search_results">
                <Row>
                    <Col>{ top5[0] }</Col>
                    <Col >{ top5[1] }</Col>
                    <Col >{ top5[2] }</Col>
                    <Col >{ top5[3] }</Col>
                    <Col >{ top5[4] }</Col>
                </Row>
			</div>
            </>
		)
    }

    renderHospitalSearchResultsText() {
        console.log('rendering');
        console.log('Hospital list', this.state.hospitals);
        return (
            <div>
                <p style={style.DescriptiveText}>
                    Here are the 5 hospitals closest to you.
                </p>
                <p style={style.EnterAddressText}>
                    Please choose one to send your message to.
                </p>
            </div>
        )
    }

    handleCardClicked(event, card_data) {
        console.log(event);
        console.log(card_data);
    }
    
	renderHospitalList() {
		const hospitals = this.state.hospitals;
		if (!hospitals) return;
		return (hospitals.map((hospital) => {
			return <HospitalCard cardClicked={this.handleCardClicked} name={hospital.name} address={hospital.address} />;
        })).slice(0,5);
	}

    render() {
        return (
            <>
            <div>
                <p style={style.DescriptiveText}>
                    Enter your address to find a hospital fighting COVID-19 near you.
                </p>
                <Autocomplete
                    style={{width: '90%'}}
                    onPlaceSelected={(place) => {
                        console.log(place);
                        this.setState({
                            zip_code: this.getZipCodeFromGooglePlace(place),
                            lat: this.getLatAndLongFromGooglePlace(place)[0],
                            lng: this.getLatAndLongFromGooglePlace(place)[1],
                        })
                        this.getClosestHospitals();
                    }}

                    types={['address']}
                    componentRestrictions={{country: "us"}}
                />
                {/* <p>Zip Code: {this.state.zip_code ? JSON.stringify(this.state.zip_code) : "HI"}</p> */}
            </div>
            { this.state.hospitals.length != 0 && this.renderHospitalSearchResultsText() }
            { this.state.hospitals.length != 0 && this.renderHospitalSearchResults() }
            </>
        );
    }
}

const style = {
    DescriptiveText: {
		fontSize: '20px',
		fontWeight: 'normal',
		padding: '2vh 0 1vh 0',
        margin: '0',
        color: '#050442',
        fontFamily: 'Karla',
        fontStyle: 'normal',

    },
    EnterAddressText: {
		fontSize: '20px',
		fontWeight: 'bold',
		padding: '1vh 0 0 0',
        margin: '0',
        color: '#050442',
        fontFamily: 'Karla',
        fontStyle: 'bold',
	},
}