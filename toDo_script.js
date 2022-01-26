// create a variable
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
// button press
addToDoButton.addEventListener('click', function() {
        var paragraph = document.createElement('p');
        paragraph.innerText = inputField.value;
        toDoContainer.appendChild(paragraph);
        inputField.value = "";
        paragraph.addEventListener('click', function() {
            paragraph.style.textDecoration = "line-through";
        })
        paragraph.addEventListener('dblclick', function() {
            toDoContainer.removeChild(paragraph);
        })
    })
    //enter key press
addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        console.log("13 is pressed");
        var paragraph = document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText = inputField.value;
        toDoContainer.appendChild(paragraph);
        inputField.value = "";
        event.preventDefault();
    }
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
    })
})