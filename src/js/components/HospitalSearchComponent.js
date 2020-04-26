import React from "react";

import axios from 'axios';
import Autocomplete from 'react-google-autocomplete';

export default class HospitalSearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address_components: "",
        }
    }

    componentDidMount() {
        this.findClosestHospitals();
    }

    componentWillUnmount() {
        
    }

    getZipCodeFromGooglePlace(place) {
        let obj = place.address_components.find(obj => obj.types.includes("postal_code"));
        return obj.long_name;
    }

    findClosestHospitals() {
        const apiParams = {
            app_name: 'testing',
            zip_code: 92129,
            radius_mi: 30,
            resource_types: JSON.stringify(['all']),
        }
        axios.get('https://covid-19-hospitals.now.sh/api/fetch-hospitals?', {
            params: apiParams,
        })
        .then(res => {
            console.log(res.data);
            console.log(apiParams);
        })
    }

    render() {
        return (
            <div>
                Brother may I have some oats. {this.props.name}
                <Autocomplete
                    style={{width: '90%'}}
                    onPlaceSelected={(place) => {
                        console.log(place);
                        console.log("TYPE:", typeof(place.address_components))
                        this.setState({address_components: this.getZipCodeFromGooglePlace(place)})
                    }}

                    types={['address']}
                    componentRestrictions={{country: "us"}}
                />
                <p>Address: {this.state.address_components ? JSON.stringify(this.state.address_components) : "HI"}</p>
            </div>
        );
    }
}