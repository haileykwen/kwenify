import Component from "/src/global/functions/component.function.js";
import CoreView from "/src/config/views/core.view.js";
import Http from "/src/global/functions/http.function.js";

export default class extends CoreView {
    constructor(params){
        super(params);
        this.set_title("Global Register");
    };

    async prerender() {
        Component.add_style("#global-register", "/src/global/templates/register/register.style.css");
    };

    async get_html() {
        let register_template = await Http.get("/src/global/templates/register/register.template.html");

        return register_template;
    };
};