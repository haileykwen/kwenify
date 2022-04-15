import { HomeView, DocumentationView } from "./views/index_view.js";
import { HomeController, DocumentationController } from "./controllers/index_controller.js";

const path_to_regex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const get_params = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigate_to = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: HomeView, controller: HomeController },
        { path: "/documentation", view: DocumentationView, controller: DocumentationController },
    ];

    // Test each route for potential match
    const potential_matches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(path_to_regex(route.path))
        };
    });

    let match = potential_matches.find(potential_match => potential_match.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    };

    const view = new match.route.view(get_params(match));

    document.querySelector("#app").innerHTML = await view.get_html();
    
    if (match.route.controller) match.route.controller();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigate_to(e.target.href);
        };
    });

    router();
});