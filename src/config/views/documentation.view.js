import Http from "../../global/functions/http.function.js";
import CoreView from "/src/config/views/core.view.js";

export default class extends CoreView {
    constructor(params) {
        super(params);
        this.set_title("Documentation");
    };

    async get_html() {
        let documentation_template = await Http.get("/src/config/templates/documentation.template.html");

        return documentation_template;
    };
};