let title = document.querySelector("input-options-container");
let dropdown = document.querySelector("selector-container");
const save = document.querySelector("save-container");

const selectInput = ["radio", "checkbox", "text"];

selectInput.forEach((selector, options) => {
    const inputEl = document.createElement("div");
    inputEl.setAttribute("id", "options-", selector);
    dropdown.append(inputEl);
});
