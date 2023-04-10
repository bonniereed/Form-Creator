document.getElementById("generate").onclick = function () {
    var options = ["checkbox", "select one", "text"];
    var select = document.createElement("select");
    select.name = "option";
    select.id = "option";

    for (const val of options) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }

    var h3 = document.createElement("h3");
    h3.innerHTML = "Select your input type: ";
    input = document.createElement("input").setAttribute("text");
    h3.htmlFor = "option";
    document
        .getElementById("container")
        .appendChild(h3)
        .appendChild(input)
        .appendChild(select);
};

// switch (expression) {
//     case x:
//         // code block
//         break;
//     case y:
//         // code block
//         break;
//     default:
//     // code block
// }
