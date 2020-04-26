export default class OptionsConfig {
    constructor(config) {
        this.config = config;

        this.updateField = this.updateField.bind(this);
        this.updateFields = this.updateFields.bind(this);
        this.getConfig = this.getConfig.bind(this);
        this.setConfig = this.setConfig.bind(this);
    }

    updateField(field_name, value) {
        this.config[field_name] = value;
    }

    updateFields(field_map) {
        Object.keys(field_map).forEach((key) => {
            this.updateField(key, field_map[key]);
        });
    }

    getConfig() {
        return this.config;
    }

    setConfig(config) {
        this.config = config;
    }
}