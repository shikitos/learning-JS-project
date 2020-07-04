//function which create new task 
function createNewTask() {
    //get input from dom and create var of the input
    let textInput = document.getElementById('text-input');
    //get button from dom and create var of the button
    let submitButton = document.getElementById('text-btn');
    //get text output area from dom and create var of the area
    let areaForText = document.getElementById('inner-area');

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
                typeControl.innerHTML = `${symbol}`;
                //add controls at the end of the div
                anyTask.appendChild(typeControl);
            }
            //create for "done" element
            createControls('done', "&#10004");
            //create for "delete" element
            createControls('delete', "&#10008");
            //else input is empty
        } else if (textInput.value == '' || textInput.value == null || textInput.value == ' ') {
            console.log("Empty");
        }
        //clear the input after click
        textInput.value = '';

    });
    //TODO: Need to to come up with how to start this
    doneTask();
}

//new task function
createNewTask();

function doneTask() {
    console.log("donetask");

    let doneButton = document.querySelector('.input-inner__donetask');
    doneButton.addEventListener('click', () => {
        console.log("done");

    });
}