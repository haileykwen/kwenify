export default class {
    constructor(params) {
        this.params = params;
    };

    set_title(title) {
        document.title = title;
    };

    async prerender() {
        return "";
    };

    async get_html() {
        return "";
    };
};