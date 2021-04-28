
const webpage = document.querySelector('.webpage');
const resetButton = document.querySelector('#reset');

var gridSize = 16;

createGrid();

resetButton.addEventListener("click", resetGrid);

function resetGrid(){
    webpage.innerHTML = "";
    var newGridSize = prompt("Enter New Grid Size")
    while (newGridSize > 100){
        newGridSize = prompt("Please Enter A Value Equal To Or Below 100")
    }
    createGrid(newGridSize);
}

function createGrid(sizeOfGrid=gridSize){

    var newDiv = document.createElement("div");

    newDiv.className = "container-col";    

    for (var x = 0; x < sizeOfGrid; x++){
        var newDiv2 = document.createElement("div");
        newDiv2.className = "container-row";
        for (var y = 0; y < sizeOfGrid; y++){
            var newItem = document.createElement("div");
            newItem.className = "item no-border";
            newDiv2.appendChild(newItem);
        }
        newDiv.appendChild(newDiv2);
    }

    webpage.appendChild(newDiv);
    
    const gridItem = document.querySelectorAll('.item');

    for (const item of gridItem) {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = getRandomColour();
            //console.log("hit");
        });
    }
}

function getRandomColour(){
    var colourString = "rgb(";
    colourString += String(getRandomInt(255)) + ",";
    colourString += String(getRandomInt(255)) + ",";
    colourString += String(getRandomInt(255)) + ")";
    return colourString;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
