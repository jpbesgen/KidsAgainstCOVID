import React from "react";

export default class CanvasComponent extends React.Component {
    constructor(props) {
        super(props);

        this.isDrawing = false;
        this.isWriting = false;

        
        
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.draw = this.draw.bind(this);
    }

    componentDidMount() {
        this.canvas = document.getElementById("letter-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.size = 50;
        this.width = this.canvas.width = 8.5 * this.size;
        this.height = this.canvas.height = 11 * this.size;

        // add listeners
        this.canvas.addEventListener("mousedown", this.handleMouseDown);
        this.canvas.addEventListener("mousemove", this.handleMouseMove);
        this.canvas.addEventListener("mouseup", this.handleMouseUp);
        this.canvas.addEventListener("mouseout", this.handleMouseOut);
    
    }

    handleMouseDown(e) {
        let { currentTab } = this.props;

        switch(currentTab) {
            case "1":   // Writing
                this.isDrawing = false;
                
            break;
            case "2":   // Drawing
                this.isDrawing = true;
            break;
            case "3":   // Background
                this.isDrawing = false;
            break;
            default: 
            break;
        }
    }

    handleMouseMove(e) {
        if(this.isDrawing) this.draw(e.offsetX, e.offsetY);
    }

    handleMouseUp(e) {
        this.isDrawing = false;
    }

    handleMouseOut(e) {
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
            <canvas style={styles.canvas} id={this.props.id}>
                
            </canvas>
        )
    }
}

let styles = {
    canvas: {
        boxShadow: "3px 3px 5px 2px rgba(40, 40, 40, 0.4)"
    }
};