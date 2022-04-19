import { HomeView, DocumentationView } from "/src/config/views/index.view.js";
import { HomeController, DocumentationController } from "/src/config/controllers/index.controller.js";

import GlobalRoutes from "/src/global/config/global_routes.js";

export default function() {
    return [
        { 
            path: "/", 
            view: HomeView, 
            controller: HomeController 
        },
        { 
            path: "/documentation", 
            view: DocumentationView, 
            controller: DocumentationController 
        },

        ...GlobalRoutes()
    ];
};