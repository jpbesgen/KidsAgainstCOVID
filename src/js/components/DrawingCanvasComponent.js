import React from "react";

import ReactCanvas from "./ReactCanvasDraw";

export default class DrawingCanvasComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 8.5 * 50,
            height: 11 * 50,
        };

        this.isDrawing = false;
        
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.draw = this.draw.bind(this);
    }

    componentDidMount() {
        // this.canvas = document.getElementById(this.props.id);
        // this.ctx = this.canvas.getContext("2d");
        // this.size = 50;
        // this.width = this.canvas.width = 8.5 * this.size;
        // this.height = this.canvas.height = 11 * this.size;

        this.props.addCanvas("drawing");

        // add listeners
        // this.canvas.addEventListener("mousedown", this.handleMouseDown);
        // this.canvas.addEventListener("mousemove", this.handleMouseMove);
        // this.canvas.addEventListener("mouseup", this.handleMouseUp);
        // this.canvas.addEventListener("mouseout", this.handleMouseOut);
    
    }

    handleMouseDown(e) {
        let { disabled } = this.props;
        if(disabled) return;

        this.isDrawing = true;
    }

    handleMouseMove(e) {
        let { disabled } = this.props;
        if(disabled) return;

        if(this.isDrawing) this.draw(e.offsetX, e.offsetY);
    }

    handleMouseUp(e) {
        let { disabled } = this.props;
        if(disabled) return;

        this.isDrawing = false;
    }

    handleMouseOut(e) {
        let { disabled } = this.props;
        if(disabled) return;
        
        this.isDrawing = false;
        
    }

    draw(x, y) {
        let { ctx } = this;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }


    render() {
        // <canvas style={this.props.hidden ? styles.hidden : styles.canvas} id={this.props.id}>
                
        // </canvas>
        return (
            <div style={this.props.hidden ? styles.canvasHidden : styles.canvas}>
                <ReactCanvas 
                    canvasWidth={this.state.width}
                    canvasHeight={this.state.height}
                    brushColor={this.props.drawing.color}
                />
            </div>
        )
    }
}

let styles = {
    canvas: {
        boxShadow: "3px 3px 5px 2px rgba(40, 40, 40, 0.4)",
        opacity: "1",
        position: "absolute",
        zIndex: "9999",
    },
    canvasHidden: {
        boxShadow: "3px 3px 5px 2px rgba(40, 40, 40, 0.4)",
        opacity: "0",
        position: "absolute",
        top: "0px",
        left: "0px",
        zIndex: "9999",
    },
    hidden: {
        display: "none"
    },
    invisble: {
        opacity: "0",
    }
};