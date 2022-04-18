import Component from "/src/global/functions/component.function.js";
import CoreView from "/src/config/views/core.view.js";
import Http from "/src/global/functions/http.function.js";

export default class extends CoreView {
    constructor(params){
        super(params);
        this.set_title("Global Login");
    };

    async prerender() {
        Component.add_style("#global-login", "/src/global/templates/login/login.style.css");
    };

    async get_html() {
        let login_template = await Http.get("/src/global/templates/login/login.template.html");

        return login_template;
    };
};