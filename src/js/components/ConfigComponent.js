import React from "react";
import OptionsConfig from "../models/OptionsConfig";

export default class ConfigComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            config: props.config
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}