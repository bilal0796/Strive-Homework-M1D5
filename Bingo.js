const displayCells = function() {
    
    //TODO: getting all the cells from (1 to 76)
    
    const boardcellscontainerNode=document.getElementById("BoardCells-container")
    
    for(cellnumber=1; cellnumber<=76; cellnumber++){

        //creating new cells div
        let cellsforboard = document.createElement("div") //<div></div>
        cellsforboard.classList.add("cells") //<div class="cells"></div>
        cellsforboard.innerText = cellnumber //<div class="cells">daynumber</div>

        //newly created class will be addeed to div "BoardCells-container" in html doc
        boardcellscontainerNode.appendChild(cellsforboard)
    }
}
    const randomNumberNode= document.getElementById("randomNumber-click")
const randomNumbergenerator = function(){
    // genrating random number using button
    let button= document.createElement("button") //<button type="button"></button>
    button.innerText="Click here to generate a number" //<button type="button">Click here to generate a number</button>
    randomNumberNode.appendChild(button)
}

window.onload = function() {
    displayCells()
    randomNumbergenerator()
}