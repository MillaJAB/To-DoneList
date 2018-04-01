function checkedRow() {
	for (var i = 1; i <= numRows; i++) {
		if (document.getElementById("taskTable").rows[i].cells[5].innerHTML == '<img src="checkedBox.png">') {
			return i;
		}
	}
}

function removeFromDatabase(num) {
	var db = firebase.database().ref('tasks');
	var toDelete = document.getElementById("taskTable").rows[num].cells[2].innerHTML;
	db.child(toDelete).remove();
}