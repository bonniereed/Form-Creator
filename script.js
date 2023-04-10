let form = document.forms[0];
let showButton = document.querySelector("form button");

function addTextEl(el) {
    if (element.previousElementSibling.value.trim() === "") {
        return false;
    }

    let div = document.createElement("div");
    div.setAttribute("class", "field");

    let field = document.createElement("input");
    field.setAttribute("type", "text");
    field.setAttribute("name", "notes[]");
    let add = document.createElement("span");
    add.setAttribute("onclick", "addTextEl(this)");
    let addText = document.createTextNode("+");
    add.appendChild(addText);

    let minus = document.createElement("span");
    minus.setAttribute("onclick", "minusTextEl(this)");
    let minusText = document.createTextNode("-");
    minus.appendChild(minusText);

    form.insert(div, showButton);
    div.appendChild(field);
    div.appendChild(add);
    div.appendChild(minus);

    element.nextElementSibling.style.display = "block";
    element.style.display = "none";
}

// document.getElementById("generate").onclick = function () {
//     var options = ["checkbox", "select one", "text"];
//     var select = document.createElement("select");
//     select.name = "option";
//     select.id = "option";

//     for (const val of options) {
//         var option = document.createElement("option");
//         option.value = val;
//         option.text = val.charAt(0).toUpperCase() + val.slice(1);
//         select.appendChild(option);
//     }

//     var h3 = document.createElement("h3");
//     h3.innerHTML = "Select your input type: ";
//     input = document.createElement("input");
//     input.setAttribute("text");
//     h3.htmlFor = "option";
//     document
//         .getElementById("container")
//         .appendChild(h3)
//         .appendChild(input)
//         .appendChild(select);
// };
