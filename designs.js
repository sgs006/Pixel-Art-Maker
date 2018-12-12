$(document).ready(function() {
// Select color input
const color = $('#colorPicker');
const table = $('#pixelCanvas');
// Select size input
const height = $('#inputHeight');
const width = $('#inputWeight');
  

 
// When size is submitted by the user, call makeGrid()

$('#submit').on('click', function makeGrid(event) {
  event.preventDefault(); //prevent page refresh
  table.children().remove();//clear grid and restart
  let rows = height.val();
  let cols = width.val();
  for (let m = 0; m < rows; m++){
    table.append('<tr></tr>');
  }
   for(let n = 0; n < cols; n++){
    $('table tr').append('<td class="box"></td>');
  }
});

table.on('click', '.box', function(){
  let background = color.val();
  if( $(this).css("background-color") === 'rgba(0, 0, 0, 0)' || $(this).css("background-color") === 'transparent'){
     $(this).css('background-color', background);
  }
   dragColor();
});

function dragColor() {
  let background = color.val();
  $("table").on("mousedown", ".box", function() {
    mouseDown = true;
  });

  $(document).mouseup(function() {
    mouseDown = false;
  });

  $("table").on("mousemove", "td", function() {
    if (mouseDown) {
      $(this).css("background-color", background);
    }
  });
}

$("table").on("dblclick", ".box", function(e) {
  if (e.which === 1) {
    $(this).css("background-color", "transparent");
  }
});

  
  
});
