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

    getClosestHospitals() {
        const apiParams = {
            app_name: 'testing',
            zip_code: 92129,
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
			<div className="hospital_search_results">
				<div> Hospitals in need in your area </div>
                <Row>
                    <Col>{ top5[0] }</Col>
                    <Col >{ top5[1] }</Col>
                    <Col >{ top5[2] }</Col>
                    <Col >{ top5[3] }</Col>
                    {/* <Col >{ top5[4] }</Col> */}
                </Row>
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
                    Let’s find a hospital fighting COVID-19 near you so you can send
                    your message.
                </p>
                <p style={style.EnterAddressText}>
                    Enter your address:
                </p>
                <Autocomplete
                    style={{width: '90%'}}
                    onPlaceSelected={(place) => {
                        console.log(place);
                        this.setState({zip_code: this.getZipCodeFromGooglePlace(place)})
                        this.getClosestHospitals();
                    }}

                    types={['address']}
                    componentRestrictions={{country: "us"}}
                />
                <p>Zip Code: {this.state.zip_code ? JSON.stringify(this.state.zip_code) : "HI"}</p>
            </div>
            { this.state.hospitals && this.renderHospitalSearchResults() }
            </>
        );
    }
}

const style = {
    DescriptiveText: {
		fontSize: '20px',
		fontWeight: 'normal',
		padding: '1vh 0 1vh 0',
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