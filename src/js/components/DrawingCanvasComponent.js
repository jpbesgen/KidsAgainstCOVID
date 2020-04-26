import React from "react";

export default class DrawingCanvasComponent extends React.Component {
    constructor(props) {
        super(props);

        this.isDrawing = false;
        
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.draw = this.draw.bind(this);
    }

    componentDidMount() {
        this.canvas = document.getElementById(this.props.id);
        this.ctx = this.canvas.getContext("2d");
        this.size = 50;
        this.width = this.canvas.width = 8.5 * this.size;
        this.height = this.canvas.height = 11 * this.size;
        this.props.addCanvas(this.props.id);

        // add listeners
        this.canvas.addEventListener("mousedown", this.handleMouseDown);
        this.canvas.addEventListener("mousemove", this.handleMouseMove);
        this.canvas.addEventListener("mouseup", this.handleMouseUp);
        this.canvas.addEventListener("mouseout", this.handleMouseOut);
    
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
        // render background

        // render drawing

        // render text
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