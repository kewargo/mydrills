var computer_parts = [["Monitors", "LCD Screens", "Vibrant Colors"], ["Motherboards", "Fast"], 
["Chips", "Pentium", "Very Fast"], ["Hard Drives", "100 - 500 GB", "Fast Reading"], 
["DVD-ROMS", "Burn CDs", "Burn DVDs", "Listen to Both!"], ["Cases", "All Sizes",
"Choice of Colors"], ["Power Supplies", "We can get some for any computer!"]];

var i = 0;
var j = 0;
for (i = 0; i < computer_parts.lenth; i++) {
	for (j = 0; j < computer_parts[i].lenth; j++) {
		if (j === 0) {
			console.log(computer_parts[i][j] + ": ");
		} else if (j === computer_parts[i].lenth -1) {
			console.log(computer_parts[i][j] + "<br>");
		} else {

		} 	console.log(computer_parts[i][j] + ", ");	

		}
	}




