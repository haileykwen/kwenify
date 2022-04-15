import { HomeView, DocumentationView } from "/src/config/views/index.view.js";
import { HomeController, DocumentationController } from "/src/config/controllers/index.controller.js";

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
        }
    ];
};