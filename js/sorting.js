// From https://www.w3schools.com/howto/howto_js_sort_table.asp
	function sortTable(rowName) {
	  var table, rows, switching, i, x, y, shouldSwitch;
	  table = document.getElementById("taskTable");
	  switching = true;
	  /*Make a loop that will continue until
	  no switching has been done:*/
	  while (switching) {
	    //start by saying: no switching is done:
	    switching = false;
	    rows = table.getElementsByTagName("TR");
	    /*Loop through all table rows (except the
	    first, which contains table headers):*/
	    for (i = 1; i < (rows.length - 1); i++) {
	      //start by saying there should be no switching:
	      shouldSwitch = false;
	      /*Get the two elements you want to compare,
	      one from current row and one from the next:*/
	      x = rows[i].getElementsByTagName("TD")[rowName];
	      y = rows[i + 1].getElementsByTagName("TD")[rowName];

	      console.log(getTodaysDate());
	      var biz = rows[1].getElementsByTagName("TD")[DUEDATE].innerHTML;

	      console.log(biz < getTodaysDate());

	      //check if the two rows should switch place:
	      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
	        //if so, mark as a switch and break the loop:
	        shouldSwitch= true;
	        break;
	      }
	    }
	    if (shouldSwitch) {
	      /*If a switch has been marked, make the switch
	      and mark that a switch has been done:*/
	      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); //inserts the y row before the x row
	      switching = true;
	    }
	  }
	}

	function getTodaysDate() {
		var today = new Date();
	    var dd = today.getDay()+1;
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();

		//Adds 0 to date, making it always a two digit number
		if(dd<10) {
   			 dd = '0'+dd
		} 

		if(mm<10) {
		    mm = '0'+mm
		}

		today = yyyy + '-' + mm + '-' + dd;
		return today;
	}