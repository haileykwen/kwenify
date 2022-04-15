const Http = new function() {
    let create_options = function(method, data) {
        return {
            method: method, // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header?,
        };
    };

    let make_http_request = async function(url, method, data) {
        let options = {};
        if (method && data)
            options = create_options(method, data);
        let request = await fetch(url, options)
            .then(async response => await response.json())
            .then(response => response)
            .catch(error => error);
        return request;
    };

    this.get = async function(url) {
        let response = await make_http_request(url);
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