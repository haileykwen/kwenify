import Http from "../../global/functions/http.function.js";
import CoreView from "/src/config/views/core.view.js";

export default class extends CoreView {
    constructor(params) {
        super(params);
        this.set_title("Home");
    };

    async get_html() {
        let home_template = await Http.get("/src/config/templates/home.template.html");

        return home_template;
    };
};