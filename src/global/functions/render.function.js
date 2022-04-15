class Render_Function {
    static text_to_element(text) {
        let template = document.createElement('template');
        template.innerHTML = text;
        let converted_text = template.content;
        return converted_text;
    };

    render(target_element_selector, element_to_be_embed) {
        let target_element = document.querySelector(target_element_selector);
        if (!target_element) return console.log(`render error, target element with given selector "${target_element_selector}" not found`);
        // console.log(`target element with given selector "${target_element_selector}" found`, target_element);
        target_element.innerHTML = element_to_be_embed;
    };

    append(target_element_selector, element_to_be_embed) {
        let target_element = document.querySelector(target_element_selector);
        let converted_element = this.text_to_element(element_to_be_embed);
        if (!target_element) return console.log(`append error, target element with given selector "${target_element_selector}" not found`);
        // console.log(`target element with given selector "${target_element_selector}" found`, target_element);
        target_element.append(converted_element);
    };

    prepend(target_element_selector, element_to_be_embed) {
        let target_element = document.querySelector(target_element_selector);
        let converted_element = this.text_to_element(element_to_be_embed);
        if (!target_element) return console.log(`prepend error, target element with given selector "${target_element_selector}" not found`);
        // console.log(`target element with given selector "${target_element_selector}" found`, target_element);
        target_element.prepend(converted_element);
    };
};

const RenderFunction = new Render_Function;
export default RenderFunction;