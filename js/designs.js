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

//Color cell function
function colorCanvas() {
  //When user click on a cell the chosen color is applied to the background
  $("td").click(function() {
    colorChoice = $("#colorPicker").val();
    $(this).css("background-color", colorChoice);
  });
  //On double click user can remove the color of the cell
  $("td").dblclick(function() {
    $(this).css("background-color", "");
  });
}

//Color canvas function call when user enter mouse on table
tableCanvas.mouseenter(colorCanvas);
