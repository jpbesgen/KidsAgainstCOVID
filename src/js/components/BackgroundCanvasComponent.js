import React from "react";

export default class BackgroundCanvasComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.canvas = document.getElementById(this.props.id);
        this.ctx = this.canvas.getContext("2d");
        this.size = 50;
        this.width = this.canvas.width = 8.5 * this.size;
        this.height = this.canvas.height = 11 * this.size;
        this.props.addCanvas(this.props.id);
   
    }

 



    render() {
        return (
            <canvas style={this.props.hidden ? styles.hidden : styles.canvas} id={this.props.id}>
                
            </canvas>
        )
    }
}

let styles = {
    canvas: {
        boxShadow: "3px 3px 5px 2px rgba(40, 40, 40, 0.4)"
    },
    hidden: {
        display: "none"
    }
};