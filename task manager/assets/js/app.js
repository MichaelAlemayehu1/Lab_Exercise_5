 // Define UI Variables 

 const taskInput = document.querySelector('#task');               //the task input text field

 
 const form = document.querySelector('#task-form');             //The form at the top
 
 const filter = document.querySelector('#filter');                      //the task filter text field
 
 const taskList = document.querySelector('.collection');          //The ul
 
 const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button

 const reloadIcon = document.querySelector('.fa');

 const Ascending = document.querySelector('#asc');

 const Descending = document.querySelector('#desc');
 
 
  // Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);

// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

//   Filter Task 
filter.addEventListener('keyup', filterTasks);

// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);

 Ascending.addEventListener('click', sortAsc);
Descending.addEventListener('click', sortDesc);


   


 
// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);







// Add New  Task Function definition 
function addNewTask(e) {
    e.preventDefault();
    if (taskInput.value === '') 

    {
    //    alert('Enter New Task');
    taskInput.style.borderColor = "red";
       return;     //avoiding else statement

    }
     // Create an li element when the user adds a task 
     const li = document.createElement('li');
     // Adding a class
     li.className = 'collection-item';
     // Create text node and append it 
     li.appendChild(document.createTextNode(taskInput.value));
     // Create new element for the link 
     const link = document.createElement('a');
     // Add class and the x marker for a 
     link.className = 'delete-item secondary-content';
     link.innerHTML = '<i class="fa fa-remove"></i>';
     
     // Append link to li
     li.appendChild(link);

     const divDate = document.createElement("div");
     divDate.className = "div-date";
     divDate.style.display = "block";
   
     let today = new Date();
   
     const dateText = document.createTextNode(
       today.getFullYear() +
         "-" +
         today.getMonth() +
         "-" +
         today.getDate() +
         " " +
         today.getHours() +
         ":" +
         today.getMinutes() +
         ":" +
         today.getSeconds() +
         ":" +
         today.getMilliseconds()
     );
     divDate.appendChild(dateText);

     
     li.appendChild(divDate);
     

     // Append to ul 
     taskList.appendChild(li);
     
     
    //  taskList.removeChild(li);

    // alert("Add New Task ....");

     //disable form submission
}

// Clear Task Function definition 
function clearAllTasks() {
    // taskList.innerHTML = ''; 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // alert("Clear tasks ....");
    

}

// Filter tasks function definition 
function filterTasks(e) {
   
    let searchItem = filter.value;
    let collectionItems = document.querySelectorAll(".collection-item");
    collectionItems.forEach((item) => {
      if (item.textContent.indexOf(searchItem)) {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
    });

    // console.log("Task Filter ...");

}
 
// Remove Task function definition 
function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item'))
        {
        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();
        }

    }


}

// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}

function descSort(arr) {
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
      for (var j = 1; j <= i; j++) {
        if (arr[j - 1].innerText < arr[j].innerText) {
          var temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  function sortDesc() {
    const divDate = document.querySelectorAll(".div-date");
    const taskDates = Array.from(divDate);
    const dates = descSort(taskDates);
    taskList.innerHTML = "";
    dates.forEach((date) => {
      taskList.appendChild(date.parentElement);
    });
  }

  

function sortAsc(){
  const divDate = document.querySelectorAll(".div-date");
  const taskDates = Array.from(divDate);
  const dates = ascSort(taskDates);
  taskList.innerHTML=""
  dates.forEach((date)=>{
    taskList.appendChild(date.parentElement);
  });
 }

function ascSort(arr) {
  var len = arr.length;
  for (var i = len - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (arr[j - 1].innerText > arr[j].innerText) {
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

