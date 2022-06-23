let formEl = document.querySelector('#task-form')
let tasksToDoEl = document.querySelector('#tasks-to-do')

/*
Adding an event lister to the button
Then creating a new list item by using 'CreateElement'
Then giving list item a class name to have the css styles
Then assigning a text content to be displayed as text in the new li
Then using appendChild to put the new item into the ui

*/

let createTaskHandler = function(event){
    event.preventDefault()

    let taskNameInput = document.querySelector("input[name='task-name']").value;
    let taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.dir(taskNameInput)
    console.log(taskTypeInput)

    //create lst item
    let listItemEl = document.createElement('li')
    listItemEl.className = 'task-item'
    
    //create div to hold task info and add to list item
    let taskInfoEl = document.createElement('div')
    // give it a class name
    taskInfoEl.className = 'task-info'
    // add html content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl)
    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl)
/*
    let listItemEl = document.createElement('li')
    listItemEl.className = 'task-item'
    listItemEl.textContent = taskNameInput
    tasksToDoEl.appendChild(listItemEl)
    */
 
} 
formEl.addEventListener('submit',createTaskHandler)





