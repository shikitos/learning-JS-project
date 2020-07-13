//function which create new task
function createNewTask() {
    //get input from dom and create var of the input
    let textInput = document.getElementById('text-input');
    //get button from dom and create var of the button
    let submitButton = document.getElementById('text-btn');
    //get text output area from dom and create var of the area
    let areaForText = document.getElementById('inner-area');
    //create array with tasks
    let todoList = [];



    //create eventListener for the button
    submitButton.addEventListener('click', () => {
        if (textInput.value !== '' || textInput.value == null) {
            //create temporary object
            let temp = {};
            //add value to the array todoList
            temp.todo = textInput.value;
            //add check false (for true in the future when task has done)
            temp.check = false;
            //add temporary array to the current
            todoList[todoList.length] = temp;
            //start outputting elements
            outputElements();
            //localStorage for the todoList
            localStorage.setItem('todoList', JSON.stringify(todoList));
        //if value is empty
        } else {
            console.log("Empty string");
        }
    });

    //function for outputElements from todoList
    function outputElements() {
        //clear the output
        let output = '';
        //start iterating through an array
        for (let i = 0; i < todoList.length; i++) {
            // if task is checked
            if (todoList[i].check) {
                output += `<div class="input-inner__task"><input type="checkbox" checked>${todoList[i].todo}</div>`;
            } else {
                output += `<div class="input-inner__task"><input type="checkbox">${todoList[i].todo}</div>`;
            }
        }
        //output all tasks to the HTML
        areaForText.innerHTML = output;
    }
    //delete tasks
    function deleteTasks() {
        let btnDeleteTask = document.getElementById('delete-tasks');

        btnDeleteTask.addEventListener('click', () => {
            for (let key in todoList) {
                // todoList[key].splice(key, 1);
            }
        })
    }
    deleteTasks();

    if (localStorage.getItem('todoList')) {
        todoList = JSON.parse(localStorage.getItem('todoList'));
        outputElements();
    }
}

//new task function
createNewTask();



