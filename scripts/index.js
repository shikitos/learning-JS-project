//function which create new task
function createNewTask() {
    //get input from dom and create var of the input
    let textInput = document.getElementById('text-input');
    //get button from dom and create var of the button
    let submitButton = document.getElementById('text-btn');
    //get text output area from dom and create var of the area
    let areaForText = document.getElementById('inner-area');
    // //array with controls
    // let controlsArr = [];
    //array with tasks
    let todoList = [];


    //create eventListener for the button
    submitButton.addEventListener('click', () => {
        if (textInput.value !== '' || textInput.value == null) {
            let temp = {};
            //create new <div></div>
            let anyTask = document.createElement('div');
            //git class to the element
            anyTask.classList.add('input-inner__task');
            //add value to the array todo
            temp.todo = textInput.value;
            //add check false (for true in the future when task has done)
            temp.check = false;
            //add temporary array to the current
            todoList.push(temp);
            //add new div into areaForText
            areaForText.appendChild(anyTask);
            //start outputing elemtns
            function outputElements() {
                //give it the class
                //clear the value
                textInput.value = '';
                //outputText field - create and make it clean
                let outputText = '';
                //start cycle for array
                for (let i = 0; i < todoList.length; i++) {
                    //if element is checked
                    if (todoList[i].check) {
                        //we will add class to the span
                        outputText =
                            `<span class="donetask"><input type="checkbox" checked>${todoList[i].todo}</span><br>`;
                    }
                    //or, if it isn't checked
                    else {
                        outputText =
                            `<span><input type="checkbox"> ${todoList[i].todo}</span><br>`;
                    }
                }
                //output current text at the next line
                anyTask.innerHTML = outputText;
            }
            //output text function
            outputElements();
        //if value is empty
        } else {
            console.log("Empty string");
        }
    });
}

//new task function
createNewTask();
