let console = {};
            
let logger = document.getElementById("data-logger");

console.log = text =>
{
    let element = document.createElement("h5");
    let txt = document.createTextNode(text);

    element.appendChild(txt);
    logger.appendChild(element);
}
