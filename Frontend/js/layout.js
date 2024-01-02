

let layoutGrid = document.getElementById("field");
let gridHTML = "";
let singleChanel = document.getElementById("singleChanel");


createGrid(10, 10);
function createGrid(numRows, numColumns){
    for(let i = 0; i<numRows; i++){
        gridHTML += "\n<tr>";
        for(let j = 0; j<numColumns; j++){
            gridHTML += "\n<td class=\"gridCell\"> </td>";
        }
        gridHTML += "\n</tr>";
    }
    layoutGrid.innerHTML = gridHTML;
}

function mouseMoveSingleChanel(event){
    let td = event.target.closest(".gridCell");
    td.style.backgroundColor = "red";
    console.log(event.target);
}

singleChanel.onmousedown = function(){
    document.addEventListener("mousemove", mouseMoveSingleChanel);
}

document.onmouseup = function(){
    document.removeEventListener("mousemove", mouseMoveSingleChanel);
}

document.ondragstart = function(){
    return false;
}
document.onmousedown = function(){
    return false;
}