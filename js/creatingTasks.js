function writeNewTask(taskName, priority, project, dueDate, timeEstimate) {
  		firebase.database().ref('tasks/' + taskName).set({
  			 priority: priority, 
   			 project: project,
    		 taskName: taskName,
   			 dueDate : dueDate,
   			 timeEstimate: timeEstimate
 	 	});
	}

	function setThings() {
		var taskText = document.getElementById("taskField").value;
		var projectText = document.getElementById("projectField").value;
		var datePicked = document.getElementById("datePicker").value;
		var timeEstimate = document.getElementById("timeEstimate").value;
		var priorityPicked = checkRadioButtons();
		if (taskText == "" || projectText == "" || priorityPicked == null) {
			document.getElementById("error").style.display = "block";
		} else {
			writeNewTask(taskText, priorityPicked, projectText, datePicked, timeEstimate)
			clearFields();
			window.location.reload(); // Need better way to dynamically add rows without reloading the page completely
		}
	}

	function clearFields() {
		document.getElementById("projectField").value = "";
		document.getElementById("taskField").value = "";
		document.getElementById("datePicker").value = "";
		document.getElementById("timeEstimate").value = "";
		for (var i = 1; i <= 4; i++) {
			document.getElementById("radioBtn" + i).checked = false;
		}
	}

	function checkRadioButtons() {
		for (var i = 1; i <= 4; i++) {
			if (document.getElementById("radioBtn" + i).checked) {
				return document.getElementById("radioBtn" + i).value;
			}
		}
	}

	function createRow(priority, project, task, due, est) {
		var table = document.getElementById("taskTable");
		var row = table.insertRow(-1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		var cell6 = row.insertCell(5);
		cell1.innerHTML = priority;
		cell2.innerHTML = project;
		cell3.innerHTML = task;
		cell4.innerHTML = due;
		cell5.innerHTML = est;
		var check = document.createElement("img");
		check.src = "uncheckedBox.png";
		check.onclick = function() {
			check.src = "checkedBox.png";
			removeFromDatabase(checkedRow());
			document.getElementById("taskTable").deleteRow(checkedRow());
		}
		cell6.appendChild(check);
		numRows++;
	}