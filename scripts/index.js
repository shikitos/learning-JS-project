//function which create new task
function createNewTask() {
    //get input from dom and create var of the input
    let textInput = document.getElementById('text-input');
    //get button from dom and create var of the button
    let submitButton = document.getElementById('text-btn');
    //get text output area from dom and create var of the area
    let unorderedList = document.getElementById('place');
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
        unorderedList.innerHTML = output;
        //start function which will delete checked elements
        deleteTasks();
        //start function which will delete all elements
        deleteAllTasks();
        //clear the input.value section
        textInput.value = '';
    }

    //delete checked tasks
    function deleteTasks() {
        //get list of tasks
        let li = unorderedList.children;
        //get deleteTasks button
        let btnDeleteTasks = document.getElementById('delete-tasks');
        //add event listener for the click to btn
        btnDeleteTasks.addEventListener('click', () => {
            //create loop for every li element
            for (let i = 0; i < li.length; i++) {
                //if element is checked
                while (li[i] && li[i].children[0].checked) {
                    //delete a checked item
                    unorderedList.removeChild(li[i]);
                    //extract an array from the local storage
                    let localArr = JSON.parse(localStorage.getItem('todoList'));
                    //delete this element
                    localArr.splice(li[i], 1);
                    //save array to the local storage
                    localStorage.setItem('todoList', JSON.stringify(localArr));
                }

            }
        });
    }


    //delete all tasks from the list
    function deleteAllTasks() {
        //get deleteAllTasks button
        let btnDeleteAllTasks = document.getElementById('delete-all-tasks');
        //add event for the button
        btnDeleteAllTasks.addEventListener('click', () => {
            /*
            **while we have elements (<li>) in the <ul>
            **remove <li> from <ul>
            */
            while (unorderedList.firstChild) unorderedList.removeChild(unorderedList.firstChild);
            //as well, remove all elements from the local storage
            localStorage.clear();
        });
    }

    //if local storage isn't empty — parse elements and output them
    if (localStorage.getItem('todoList')) {
        todoList = JSON.parse(localStorage.getItem('todoList'));
        //output elements to the page
        outputElements();
    }
}

//new task function
createNewTask();



