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
            todoList.push(temp);
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
        // console.log("function is working");
        // //give it the class
        // //clear the value
        // textInput.value = '';
        // //outputText field - create and make it clean
        // let outputText = '';
        // //start cycle for array
        // for (let i = 0; i < todoList.length; i++) {
        //     //if element is checked
        //     if (todoList[i].check) {
        //         //we will add class to the span
        //         outputText =
        //             `<span class="donetask"><input type="checkbox" checked>${todoList[i].todo}</span><br>`;
        //         console.log("Working");
        //     }
        //     //or, if it isn't checked
        //     else {
        //         outputText =
        //             `<span><input type="checkbox"> ${todoList[i].todo}</span><br>`;
        //     }
        // }
        //output current text at the next line
        todoList.forEach(elem => {
            if (elem.check) {
                //create new <div></div>
                let anyTask = document.createElement('div');
                //git class to the element
                anyTask.classList.add('input-inner__task');
                //add new div into areaForText
                areaForText.appendChild(anyTask);
                anyTask.innerHTML += `<span class="donetask"><input type="checkbox" checked>${elem.todo}</span>`;
            } else{
                //create new <div></div>
                let anyTask = document.createElement('div');
                //git class to the element
                anyTask.classList.add('input-inner__task');
                //add new div into areaForText
                areaForText.appendChild(anyTask);
                anyTask.innerHTML += `<span><input type="checkbox"> ${elem.todo}</span>`;
            }
        });
    }

    //delete tasks
    function deleteTasks() {
        let btnDeleteTask = document.getElementById('delete-tasks');

        btnDeleteTask.addEventListener('click', () => {
            for (let key in todoList) {
                todoList.splice(key, 1);
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



