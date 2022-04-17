const Http = new function() {
    let make_options = function(method, data) {
        let options = {
            mode: "no-cors",
            headers: {
                'Content-Type': 'application/json'
            }
        };

        options.method = method;

        if (data != null || data != undefined)
            options.body = JSON.stringify(data);

        return options;  
    };

    let make_config = function(url, method, data) {
        let options = make_options(method, data);
        return [url, options];
    };

    let make_http_request = async function(
        url, 
        method = "GET" || "POST" || "PUT" || "DELETE", 
        data
    ) {
        let request = await fetch(...make_config(url, method, data))
            .then(async response => {
                if (url.includes("html")) {
                    return await response.text();
                }

                await response.json();
            })
            .then(response => response)
            .catch(error => error);

        return request;
    };
    
    this.get = async function(url, data) {
        let response = await make_http_request(url, "GET", data);
        return response;
    };

    this.post = async function(url, data) {
        let response = await make_http_request(url, "POST", data);
        return response;
    };

    this.put = async function(url, data) {
        let response = await make_http_request(url, "PUT", data);
        return response;
    };

    this.delete = async function(url, data) {
        let response = await make_http_request(url, "DELETE", data);
        return response;
    };
};

export default Http;