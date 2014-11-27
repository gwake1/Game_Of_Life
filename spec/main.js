// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
});
document.querySelector(".btn").addEventListener("click", function(){
  generateGrid();
})


var matrix = {
  rows: 25,
  cells: 25,
}
// // 1. append rows and cells
function generateGrid(){
  for(var i=0; i< matrix.rows; i++){
    var table = document.querySelector(".life");
    var tr = document.createElement("tr");
    table.appendChild(tr);
    for(var j=0; j< matrix.cells; j++){
      var td = document.createElement("td");
      tr.appendChild(td);
    }
  }
  console.log("calling generateGrid(): made a "+matrix.rows+"x"+matrix.cells+" table");
}
// // 2. Generate random matrix

// // 3. Count Cells living nearby
// // 4. Apply rules
