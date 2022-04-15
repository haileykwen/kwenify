// Constructor Function
const Component = new function() {
    let text_to_element = function(text) {
        let template = document.createElement('template');
        template.innerHTML = text;
        let converted_text = template.content;
        return converted_text;
    };

    this.render = function(target_element_selector, element_to_be_embed) {
        let target_element = document.querySelector(target_element_selector);
        if (!target_element) 
            throw new Error(`render error, target element with given selector "${target_element_selector}" not found`);
        // console.log(`target element with given selector "${target_element_selector}" found`, target_element);
        target_element.innerHTML = element_to_be_embed;
    };

    this.append = function(target_element_selector, element_to_be_embed) {
        let target_element = document.querySelector(target_element_selector);
        let converted_element = text_to_element(element_to_be_embed);
        if (!target_element)
            throw new Error(`append error, target element with given selector "${target_element_selector}" not found`);
        // console.log(`target element with given selector "${target_element_selector}" found`, target_element);
        target_element.append(converted_element);
    };

    this.prepend = function(target_element_selector, element_to_be_embed) {
        let target_element = document.querySelector(target_element_selector);
        let converted_element = text_to_element(element_to_be_embed);
        if (!target_element)
            throw new Error(`prepend error, target element with given selector "${target_element_selector}" not found`);
        // console.log(`target element with given selector "${target_element_selector}" found`, target_element);
        target_element.prepend(converted_element);
    };
};

export default Component;