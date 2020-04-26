import React from "react";
import { Button } from 'reactstrap';

import PrintLetterImage from '../../img/headshot.png';
import LandingCardsComponent from './LandingCardsComponent';
import HospitalSearchComponent from './HospitalSearchComponent';

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h1>Heading</h1>
                <h2>Subheading</h2>
                <LandingCardsComponent/>
                <Button style={style.Button}> This is a button</Button>
                <HospitalSearchComponent/>

          </div>
        );
    }
}

let style = {
	Button: {
        background: 'transparent',
        outline: 'none',
        color: 'transparent',
        border: 'none',
	},
}