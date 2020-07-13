//function which create new task
function createNewTask() {
    //get input from dom and create var of the input
    let textInput = document.getElementById('text-input');
    //get button from dom and create var of the button
    let submitButton = document.getElementById('text-btn');
    //get text output area from dom and create var of the area
    let areaForText = document.getElementById('place');
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
        for (let key in todoList) {
            //constant for a shorter entry
            const { todo, check } = todoList[key];
            // if task is checked
            if (check) {
                output += `<li class="input-inner__task"><input checked type="checkbox" class="checkbox${key}"><span class="donetask">${todo}</span></li>`;
            } else {
                output += `<li class="input-inner__task"><input type="checkbox" class="checkbox${key}"><span>${todo}</span></li>`;
            }
        }

        //output all tasks to the HTML
        areaForText.innerHTML = output;
        checkedTasks();
        deleteTasks();
    }

    function checkedTasks() {
        let li = areaForText.children;
        for (let i = 0; i < li.length; i++) {
            while (li[i] && li[i].children[0].checked) {
                areaForText.removeChild(li[i]);
            }
        }
    }


    //delete tasks
    function deleteTasks() {
        let btnDeleteTask = document.getElementById('delete-tasks');
        btnDeleteTask.addEventListener('click', () => {
            let li = areaForText.children;
            for (let i = 0; i < li.length; i++) {
                while (li[i] && li[i].children[0].checked) {
                    areaForText.removeChild(li[i]);
                }
            }
        });
    }
    deleteTasks();

    if (localStorage.getItem('todoList')) {
        todoList = JSON.parse(localStorage.getItem('todoList'));
        outputElements();
    }
}

//new task function
createNewTask();



