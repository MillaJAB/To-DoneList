  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAF_vhCFAmopW6O6-nsbxpT9EAx1wJVIjI",
    authDomain: "todonelist-5df2e.firebaseapp.com",
    databaseURL: "https://todonelist-5df2e.firebaseio.com",
    projectId: "todonelist-5df2e",
    storageBucket: "",
    messagingSenderId: "81191745304"
  };
  firebase.initializeApp(config);

var taskDataRef = firebase.database().ref("tasks").orderByChild('priority');
taskDataRef.once("value")
	.then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var key = childSnapshot.key;
			var childData = childSnapshot.val();

			var priority_val = childSnapshot.val().priority;
			var project_val = childSnapshot.val().project;
			var task_val = childSnapshot.val().taskName;
			var due_val = childSnapshot.val().dueDate;
			var est_val = childSnapshot.val().timeEstimate;
			createRow(priority_val, project_val, task_val, due_val, est_val);
		})
	})