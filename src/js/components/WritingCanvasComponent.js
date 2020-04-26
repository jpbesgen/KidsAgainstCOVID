import React from "react";

export default class WritingCanvasComponent extends React.Component {
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

    componentDidUpdate() {
        let { canvas, width, height, ctx } = this,
            { greeting, body, closing } = this.props.writing,
            { color, size, family } = this.props.font;

        console.log(this.props);

        ctx.clearRect(0, 0, width, height);


        let body_segments = [],
            segment = "",
            threshold = 0,
            max = width * 1.5;
        if(body != null) {
            for(let i = 0; i < body.length; i++) {
                let char = body.charAt(i);
                segment += char;
                if(i * size > threshold + max && char == " ") { 
                    threshold += max;
                    body_segments.push(segment);
                    segment = "";
                }
            }
            if(segment.length > 0) body_segments.push(segment);
        }

        let offsetX = width / 20,
            scaleY = height / 10;

        ctx.fillStyle = color;
        ctx.font = size + "px " + family;
        if(greeting != null) ctx.fillText(greeting, offsetX, scaleY);
        if(body_segments.length > 0) {
            for(let i = 0; i < body_segments.length; i++) {
                ctx.fillText(body_segments[i], offsetX, scaleY * 2 + i*size);
            }
        }
        if(closing != null) ctx.fillText(closing, offsetX, scaleY * 9);
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