//Global variables
const tableCanvas = $("#pixelCanvas");
let colorChoice = '';

//Create table with size determided by user
function makeGrid(event) {
  //prevent submit button from reload the page
  event.preventDefault();

  //get height and width values
  let getHeight = $("#inputHeight").val();
  let getWidth = $("#inputWidth").val();

  //table prepare
  tableCanvas.children().remove();

  //create table
  for (let i = 0; i < getHeight; i++) {
    let row = '';
    row += "<tr>";
    for (let j = 0; j < getWidth; j++) {
      row += "<td></td>";
    }
    tableCanvas.append(row + "</tr>");
  }
}
