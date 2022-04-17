// Constructor Function
const Component = new function() {
    let text_to_element = function(text) {
        let template = document.createElement('template');
        template.innerHTML = text;
        let converted_text = template.content;
        return converted_text;
    };

    let component = function(
        target_element_selector, 
        element_to_be_embed, 
        type = "render" || "append" || "prepend"
    ) {
        let target_element = document.querySelector(target_element_selector);
        let converted_element = text_to_element(element_to_be_embed);
        
        if (!target_element)
            throw new Error(`${type} error, target element with given selector "${target_element_selector}" not found`);
        // console.log(`target element with given selector "${target_element_selector}" found`, target_element);

        switch(type) {
            case "render":
                target_element.innerHTML = element_to_be_embed;
                break;
            case "append":
                target_element.append(converted_element);
                break;
            case "prepend":
                target_element.prepend(converted_element);
                break;
        };
    };

    this.render = function(target_element_selector, element_to_be_embed) {
        component(target_element_selector, element_to_be_embed, "render");
    };

    this.append = function(target_element_selector, element_to_be_embed) {
        component(target_element_selector, element_to_be_embed, "append");
    };

    this.prepend = function(target_element_selector, element_to_be_embed) {
        component(target_element_selector, element_to_be_embed, "prepend");
    };
};

export default Component;