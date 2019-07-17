// Shortcuts for VSCODE:
// https://code.visualstudio.com/docs/getstarted/keybindings

/**
 * Task -> remove all the line breaks.
 * 
 * Rules
 *  -> Using mouse cursor is forbidden.
 *  -> Using touchpad to scroll is allowed
 *  -> You have to remove first of all the topmost
 *  line break then the bottom most linebreak. 
 * 
 * Shortcuts
 *  -> control + g -> to write the line number you want to go
 *  -> command + shift + K -> to remove a line
 */

var rows = prompt("How many rows for your multiplication table?");

var cols = prompt("How many columns for your multiplication table?");

if(rows == "" || rows == null) {

  rows = 10;

}
    
if(cols== "" || cols== null) {

  cols = 10;

}

createTable(rows, cols);

function createTable(rows, cols) {

  var j=1;

  var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
  
  for(i=1;i<=rows;i++) {
  
    output = output + "<tr>";
    
    while (j<=cols) {

      output = output + "<td>" + i*j + "</td>";

      j = j+1;
    }
    
    output = output + "</tr>";
    
    j = 1;
  }

  output = output + "</table>";

  document.write(output);
}