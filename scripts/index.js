//function which create new task
function createNewTask() {
    //get input from dom and create var of the input
    let textInput = document.getElementById('text-input');
    //get button from dom and create var of the button
    let submitButton = document.getElementById('text-btn');
    //get text output area from dom and create var of the area
    let areaForText = document.getElementById('inner-area');
    //array with controls
    let controlsArr = [];

    //create eventListenere for the button
    submitButton.addEventListener('click', () => {
        //create new <div></div>
        let anyTask = document.createElement('div');
        //give it the class
        anyTask.classList.add('input-inner__task');
        //if input not empty
        if (textInput.value) {
            //create text without controls
            anyTask.textContent = textInput.value;
            //add text at the end of the div
            areaForText.appendChild(anyTask);

            //create controls function
            function createControls(type, symbol) {
                //create new <span></span>
                let typeControl = document.createElement('span');
                //give it the class
                typeControl.classList.add(`input-inner__${type}task`);
                //give it the content
                typeControl.innerHTML = symbol;
                //add controls at the end of the div
                anyTask.appendChild(typeControl);
                //add controls to the arr
                controlsArr.push(typeControl);
            }
            //create for "done" element
            createControls('done', '&#10004');
            //create for "delete" element
            createControls('delete', '&#10008');
            //else input is empty
        } else if (
            textInput.value == '' ||
            textInput.value == null ||
            textInput.value == ' '
        ) {
            console.log('Empty');
        }
        //clear the input after click
        textInput.value = '';
        doneTask();
        deleteTask();
    });

    //done task button
    function doneTask() {
        //var for done-button
        /*//TODO: How to get all elements (not only one)
         **Need to figure out with this
         **Maybe create new Arr
         **Where will be all tasks?
         **Or newclassnames with ID at the end?
         */
        let doneButton = document.querySelector('.input-inner__donetask');
        let anyTask = document.querySelector('.input-inner__task');
        for (let i = 0; i < controlsArr.length; i++) {
            controlsArr[i].addEventListener('click', () => {
                if (i % 2 == 0) {
                    console.log(i);

                    console.log(controlsArr[i]);
                    anyTask.style.textDecoration = 'line-through';
                }
                console.log('penis');
            });
        }
    }

    //delete task button
    function deleteTask() {
        //var for done-button
        /*//TODO: How to get all elements (not only one)
         **Need to figure out with this
         **Maybe create new Arr
         **Where will be all tasks?
         **Or newclassnames with ID at the end?
         */
        let deleteButton = document.querySelector('.input-inner__deletetask');
        let anyTask = document.querySelector('.input-inner__task');
        deleteButton.addEventListener('click', () => {
            console.log(controlsArr);
            // anyTask.style.textDecoration = 'line-through';
        });
    }
}

//new task function
createNewTask();