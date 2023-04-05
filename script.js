let title = document.querySelector("input-options-container");
let dropdown = document.querySelector("selector-container");
const save = document.querySelector("save-container");

const selectInput = ["radio", "checkbox", "text"];

selectInput.forEach((selectInput) => {
    const optionEl = document.createElement("option");
    optionEl.textContent = selectInput;
    optionEl.setAttribute("id", "value", selectInput);
    optionEl.addEventListener("click", () => handleClick(selectInput));
    dropdown.append(optionEl);
});

// function createSelector() {
//     selectInput.forEach((option) => {
//         const inputEl = document.createElement("option");
//         let optionText = option++;
//         inputEl.setAttribute("id");
//         dropdown.append(inputEl);
//     });
// }
