// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
});

// 1. append rows and cells
var table = document.querySelector(".life");
// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(0);
// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
// Add some text to the new cells:
cell1.innerHTML = "NEW CELL1";
cell2.innerHTML = "NEW CELL2";

// 2. Generate random matrix
// 3. Count Cells living nearby
// 4. Apply rules
