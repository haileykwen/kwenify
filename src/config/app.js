import Routes from "/src/config/routes.js";

function path_to_regex(path) {
    return new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
};

function get_params(match) {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

function navigate_to(url) {
    history.pushState(null, null, url);
    router();
};

async function router() {
    const routes = Routes();

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
            e.target.href && navigate_to(e.target.href);
        };
    });

    router();
});