import CoreView from "./core_view.js";

export default class extends CoreView {
    constructor(params) {
        super(params);
        this.set_title("Documentation");
    };

    async get_html() {
        return `
            <div 
                style="
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                "
            >
                <h1>Documentation</h1>
                <p>version 1.0.0</p>
            </div>
        `;
    };
};