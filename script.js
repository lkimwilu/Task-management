const firebaseConfig = {
    apiKey: "AIzaSyBIO5uR7iyQZI-pJ6w-D5_vxAHX5BIOa8c",
    authDomain: "task-management-9bc15.firebaseapp.com",
    databaseURL: "https://task-management-9bc15-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "task-management-9bc15",
    storageBucket: "task-management-9bc15.appspot.com",
    messagingSenderId: "35141996467",
    appId: "1:35141996467:web:6c48803234fe6da65d85c6",
    measurementId: "G-30R13QKFG2"
  };

  firebase.initializeApp(firebaseConfig);
  var totalItems
  var maxCode
  var code

// store / send data to the database
  function storeTask(event) {
    event.preventDefault();
    
    var task = document.getElementById("task").value;
    var desc = document.getElementById("desc").value;

    document.getElementById("task").value = "";
    document.getElementById("desc").value = "";

    code =totalItems
    if(totalItems < maxCode) {
        code = maxCode + 1;
}
    firebase.database().ref("TaskList" + code).set({
        taskName: task,
        descName: desc,
        status: "Pending",
    });

    // update the number of tasks in the datbase
    firebase 
    .database()
    .ref("TotalTasks")
    .update({
        totalItems: totalItems + 1,
        maxCode: maxCode + 1,
    });

    if(document.getElementById("info") !== null){
        document.getElementById("info").remove();

    }
    
    //  show the data in the body in form of a card
    document.getElementById("tasks-header").insertAdjacentHTML(
        "afterend",
        `<div class="Task-item" id="${code}">
        <div class="data" id="${task}">
            <button id="done" class="done" onclick = "changeStatus('${code}')"><i class="far fa-check-circle"></i></button>
            <h2 class="Task">${task}</h2>
            <p class="desc">${desc}</p>
            <small id = "status"></small>
        </div>
        <hr>
        <div class="buttons">
            <button class="button edit" id="editbtn" onclick = "editData('${code}')"><i class="fas fa-edit"></i> EDIT TASK</button>
            <button class="button delete" id="deletebtn" onclick = "deleteData('${code}')">
            <i class="fas fa-trash-alt"></i>DELETE TASK</button>
        </div>
        
        </div>`
      );

      
 }

