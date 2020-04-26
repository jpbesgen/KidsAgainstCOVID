import React from "react";

import HospitalCard from './HospitalCard';
import axios from 'axios';
import Autocomplete from 'react-google-autocomplete';

export default class HospitalSearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip_code: "",
            hospitals: [],
        }
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
		return (
			<div className="hospital_search_results">
				<div> Hospitals in need in your area </div>
				{ this.renderHospitalList() }
			</div>
		)
    }
    
	renderHospitalList() {
		const hospitals = this.state.hospitals;
		if (!hospitals) return;
		return (hospitals.map((hospital) => {
			return <HospitalCard name={hospital.name} address={hospital.address} />;
        })).slice(0,5);
	}

    render() {
        return (
            <>
            <div>
                Brother may I have some oats.
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