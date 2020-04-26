export default class ConfigManager {
    constructor() {
        this.configs = {};
    }

    addConfig(key, config) {
        this.configs[key] = config;
    }

    removeConfig(key) {
        delete this.configs[key];
    }

    getConfig(key) {
        return this.configs[key];
    }

    getConfigsMap() {
        return this.configs;
    }

    getConfigsList() {
        return Object.keys(this.configs).map((key) => {return {key: this.configs[key]}});
    }
}