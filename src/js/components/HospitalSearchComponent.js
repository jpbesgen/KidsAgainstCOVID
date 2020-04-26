import React from "react";

import axios from 'axios';
import { queries } from "@testing-library/react";
import qs from 'qs';

export default class HospitalSearchComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.findClosestHospitals();
    }

    componentWillUnmount() {

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
                
            </div>
        );
    }
}