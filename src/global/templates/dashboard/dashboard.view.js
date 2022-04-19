import Component from "/src/global/functions/component.function.js";
import CoreView from "/src/config/views/core.view.js";
import Http from "/src/global/functions/http.function.js";

export default class extends CoreView {
    constructor(params){
        super(params);
        this.set_title("Global Dashboard");
    };

    async prerender() {
        Component.add_style("#global-dashboard-main-style", "/src/global/templates/dashboard/dashboard.style.css");
        Component.add_style("#global-dashboard-unicons", "https://unicons.iconscout.com/release/v4.0.0/css/line.css");
    };

    async get_html() {
        let dashboard_template = await Http.get("/src/global/templates/dashboard/dashboard.template.html");

        return dashboard_template;
    };
};