let formEl = document.querySelector('#task-form')
let tasksToDoEl = document.querySelector('#tasks-to-do') 

let taskIdCounter = 0

/*
Adding an event lister to the button
Then creating a new list item by using 'CreateElement'
Then giving list item a class name to have the css styles
Then assigning a text content to be displayed as text in the new li
Then using appendChild to put the new item into the ui

*/

let taskFormHandler = function(event){
    event.preventDefault()
// this give us the value of the text withing that element
    let taskNameInput = document.querySelector("input[name='task-name']").value;
    let taskTypeInput = document.querySelector("select[name='task-type']").value;

    // we can see the value being printed with consoleLog
    console.dir(taskNameInput)
    console.log(taskTypeInput)

    // check if input values are empty stringsd

    if(!taskNameInput || !taskTypeInput){
        alert("You need to fill out the task form!")
        return false
    }
    formEl.reset()
    
    //package up data as an object
    let taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    } 

    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj)

   
/*
    let listItemEl = document.createElement('li')
    listItemEl.className = 'task-item'
    listItemEl.textContent = taskNameInput
    tasksToDoEl.appendChild(listItemEl)
    */
 
} 

let createTaskEl = function(taskDataObj){
  
    let listItemEl = document.createElement("li")
    listItemEl.className = "task-item"
  
    // add task id as a custom attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter)
  
    let taskInfoEl = document.createElement("div")
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl)
  
    let taskActionsEl = createTaskActions(taskIdCounter)
    listItemEl.appendChild(taskActionsEl)
    tasksToDoEl.appendChild(listItemEl)
  
    // increase task counter for next unique id
    taskIdCounter++
}


formEl.addEventListener('submit',taskFormHandler)

let createTaskActions = function(taskId){

    let actionContainerEl = document.createElement('div')
    actionContainerEl.className='task-actions'

    let editButtonEl = document.createElement('button')
    editButtonEl.textContent='Edit'
    editButtonEl.className='btn edit-btn'
    editButtonEl.setAttribute('data-task-id',taskId)

    actionContainerEl.appendChild(editButtonEl)

    let deleteButtonEl = document.createElement('button')
    deleteButtonEl.textContent ='Delete'
    deleteButtonEl.className ='btn delete-btn'
    deleteButtonEl.setAttribute('data-task-id',taskId)

    actionContainerEl.appendChild(deleteButtonEl)
    let statusSelectEl = document.createElement('select')
    statusSelectEl.className = 'select-status'
    statusSelectEl.setAttribute('name','status-change')
    statusSelectEl.setAttribute('data-task-id',taskId)
    actionContainerEl.appendChild(statusSelectEl)

    let statusChoices = ['To Do', 'In Progress','Completed']

    for(let i =0; i<statusChoices.length;i++){
        // create option element
        let statusOptionEl = document.createElement('option')
        statusOptionEl.textContent = statusChoices[i]
        statusOptionEl.setAttribute('value',statusChoices[i])

        statusSelectEl.appendChild(statusOptionEl)
    }


  return actionContainerEl
}

  




