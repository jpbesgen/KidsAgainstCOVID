export default class TextBox {
    constructor(x, y, config) {
        this.config = config;
        this.x = x;
        this.y = y;
        this.width = config.getConfig().font.size;
        this.height = config.getConfig().font.size;
        
        this.active = true;
    }

    updateConfig(updates) {
        this.config.updateFields(updates);
    }

    render(ctx) {
        let config = this.config.getConfig();
        if(this.active) {
            ctx.strokeStyle = "rgba(40, 0, 140, 0.6)";
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }

        ctx.font = config.font.size + "px " + config.font.family;
        ctx.fillStyle = config.color;
        ctx.fillText(config.text, this.x, this.y);
    }
}