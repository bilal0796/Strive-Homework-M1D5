
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


const random24Numbergenerator = function(){
    let randomNumberNode24 = Math.floor(Math.random()*24)+1
    return randomNumberNode24
}
const randomNumbergenerator = function(){
    let randomNumberNode = Math.floor(Math.random()*76)+1
    let cellsarray= document.querySelectorAll(".cells")
    let cells24array= document.querySelectorAll(".cells24")
    cellsarray[randomNumberNode-1].classList.add("highlight")
    cells24array[randomNumberNode-1].classList.add("highlight24")
    
}
const displaycells24 = function(){
    //TODO: getting 24 random numbers keyboard
    const displaycells24Container = document.getElementById("24boardcells-random")
    for (cellnumbers24 = 1; cellnumbers24 <= 24; cellnumbers24++){
        let cellsforboard24 = document.createElement("div")
        cellsforboard24.classList.add("cells24")
        //let randomnumber24 = Math.floor(Math.random()*cellsforboard24)+1
        //alert(randomnumber24)
        cellsforboard24.innerText = random24Numbergenerator() 
        displaycells24Container.appendChild(cellsforboard24)
    }
}
window.onload = function() {
    displayCells()
    displaycells24()
}