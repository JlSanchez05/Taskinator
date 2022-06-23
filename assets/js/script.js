

let buttonEl = document.querySelector('#save-task')
let tasksToDoEl = document.querySelector('#tasks-to-do')

/*
Adding an event lister to the button
Then creating a new list item by using 'CreateElement'
Then giving list item a class name to have the css styles
Then assigning a text content to be displayed as text in the new li
Then using appendChild to put the new item into the ui

*/

let createTaskHandler = function(){
    let listItemEl = document.createElement('li')
    listItemEl.className = 'task-item'
    listItemEl.textContent = 'This is a new task.'
    tasksToDoEl.appendChild(listItemEl)

} 

buttonEl.addEventListener('click',createTaskHandler)




