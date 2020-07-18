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
    //create var with date object
    let date = new Date();

    //create eventListener for the button
    submitButton.addEventListener('click', () => {
        if (textInput.value !== '' || textInput.value !== null || textInput.value !== 'undefined') {
            //create temporary object
            let temp = {};
            //add value to the array todoList
            temp.todo = textInput.value;
            //add check false (for true in the future when task has done)
            temp.check = false;
            //add date for the day when you create the task
            temp.date = {
                day: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear(),
            }
            //add temporary array to the current
            todoList[todoList.length] = temp;
            //start outputting elements
            outputElements();
            //localStorage for the todoList
            localStorage.setItem('todoList', JSON.stringify(todoList));
            //if value is empty
        } else {
            //If area is empty — do nothing
            console.log("Empty string");
        }
    });

    //function for outputElements from todoList
    function outputElements() {
        //clear the output
        let output = '';
        //start iterating through an array
        for (let key = 0; key < todoList.length; key++) {
            //constant for a shorter entry
            const { todo, date } = todoList[key];
            // if task is checked
            if (todoList[key].check) {
                //here — we add class for the <li></li> — "donetask"
                output += `<li class="input-inner__task donetask"><input checked type="checkbox" class="checkbox${key}"><span class="task-todo">${todo}</span><span class="task-date">  ${date.day}/${date.month}/${date.year}</span></li>`;
            } else {
                //here we create output without "donetask" class — this only for new tasks
                output += `<li class="input-inner__task"><input type="checkbox" class="checkbox${key}"><span class="task-todo">${todo}</span><span class="task-date">  ${date.day}/${date.month}/${date.year}</span></li>`;
            }
        }
        //output all tasks to the HTML
        unorderedList.innerHTML = output;
        //start function which will delete checked elements
        deleteTasks();
        //start function which will delete all elements
        deleteAllTasks();
        //start function which will toggle check effect
        checkItem();
        //start function which will move and delete from list done tasks
        clearAndMoveDoneTasks();
        //start function which will output all done elements
        outputDoneTasks();
        //clear the input.value section
        textInput.value = '';
    }

    //checkbox style and switch todoList.check attr
    function checkItem() {
        //get li elements
        let innerTask = unorderedList.children;
        //iterating through an array of tasks
        for (let key = 0; key < todoList.length; key++) {
            //get checkbox of the every task
            let checkbox = document.querySelector(`.checkbox${key}`);
            //add event for every checkbox
            checkbox.addEventListener('change', () => {
                /*
                **if todoList.check == false
                **when click at the check box
                ** class toggle true <-> false
                 */
                if (!todoList[key].check) {
                    //add class when task is done
                    innerTask[key].classList.add('donetask');
                    //toggle check:false to true
                    todoList[key].check = true;
                    //get elements from local storage
                    let localArr = JSON.parse(localStorage.getItem('todoList'));
                    //toggle check at the local storage to true
                    localArr[key].check = true;
                    //save array to the local storage
                    localStorage.setItem('todoList', JSON.stringify(localArr));
                } else {
                    //remove class is task isn't done
                    innerTask[key].classList.remove('donetask');
                    //toggle check:false to false
                    todoList[key].check = false;
                    //get elements from local storage
                    let localArr = JSON.parse(localStorage.getItem('todoList'));
                    //toggle check at the local storage to false
                    localArr[key].check = false;
                    //save array to the local storage
                    localStorage.setItem('todoList', JSON.stringify(localArr));
                }
            });
        }
    }

    /*
    ** function for a clear area
    ** from done tasks and move it
    ** at the local storage and at the window with done tasks
     */
    function clearAndMoveDoneTasks() {
        //get area where will be tasks
        let textArea = document.getElementById('donetask');
        //get <li> item for task
        let li = unorderedList.children;
        //get button for "CLEAR DONE TASKS"
        let btnClearDoneTasks = document.getElementById('done-tasks');
        //create empty arr for tasks
        let doneTasksArr = [];

        //add eventlistener for button
        btnClearDoneTasks.addEventListener('click', () => {
            //every time before output clear area
            textArea.innerHTML = '';
            for (let i = 0; i < li.length; i++) {
                if (li[i].children[0].checked) {
                    if (localStorage.getItem('doneTasks')) {
                        //get data from local storage
                        doneTasksArr = JSON.parse(localStorage.getItem('doneTasks'));
                        //add task at the array
                        doneTasksArr.push(todoList[i]);
                        //add done task at the local storage
                        localStorage.setItem('doneTasks', JSON.stringify(doneTasksArr));
                        //remove done task from task list
                        unorderedList.removeChild(li[i]);
                        //extract an array from the local storage
                        let localArr = JSON.parse(localStorage.getItem('todoList'));
                        //delete this element
                        localArr.splice(i, 1);
                        //save array to the local storage
                        localStorage.setItem('todoList', JSON.stringify(localArr));
                        outputDoneTasks();
                    } else {
                        //add task at the array
                        doneTasksArr.push(todoList[i]);
                        //add done task at the local storage
                        localStorage.setItem('doneTasks', JSON.stringify(doneTasksArr));
                        //remove done task from task list
                        unorderedList.removeChild(li[i]);
                        //extract an array from the local storage
                        let localArr = JSON.parse(localStorage.getItem('todoList'));
                        //delete this element
                        localArr.splice(i, 1);
                        //save array to the local storage
                        localStorage.setItem('todoList', JSON.stringify(localArr));
                        //output the done-tasks list
                        outputDoneTasks();
                    }
                }
                 else {
                    console.log("Unchecked");
                }
            }
        });
        //if we have not in storage done tasks
        if (!localStorage.getItem('doneTasks')) {
            //output the text....
            textArea.innerHTML = `<span class="footer__datalist-empty">Пока тута пусто<span class="footer__datalist-emptyani">.</span><span class="footer__datalist-emptyani">.</span><span class="footer__datalist-emptyani">.</span></span>`;
        }
    }

    //output all done tasks
    function outputDoneTasks() {
        //get wrapper of the every task (<ul>)
        let textArea = document.getElementById('donetask');
        //if we have data in local storage
        if (localStorage.getItem('doneTasks')) {
            //parse from local to var
            let localDoneTasks = JSON.parse(localStorage.getItem('doneTasks'));
            //start a loop for an array from local storage
            for (let i = 0; i < localDoneTasks.length; i++) {
                //get data by every iteration
                textArea.innerHTML += `<li class="footer__datalist"><span class="task-done">${localDoneTasks[i].todo}</span><span class="task-donedate">${localDoneTasks[i].date.day}/${localDoneTasks[i].date.month}/${localDoneTasks[i].date.year}</span></li>`;
            }
        }
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
                    console.log(li[i]);
                    //delete a checked item
                    unorderedList.removeChild(li[i]);
                    //extract an array from the local storage
                    let localArr = JSON.parse(localStorage.getItem('todoList'));
                    //delete this element
                    localArr.splice(i, 1);
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
