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
    //array with tasks
    let todoList = [];

    let temp = {};

    //create eventListenere for the button
    submitButton.addEventListener('click', () => {
        //create new <div></div>
        anyTask = document.createElement('div');
        temp.todo = textInput.value;
        temp.check = false;
        todoList.push(temp);
        areaForText.appendChild(anyTask);
        console.log(todoList);

        outputElements();

        function outputElements() {
            //give it the class
            anyTask.classList.add('input-inner__task');
            //clear the value
            anyTask.value = '';
            for (let i = 0; i < todoList.length; i++) {
                areaForText.innerHTML +=
                    '<input type="checkbox" checked> ' + todoList[i].todo;
            }
        }

        //     //if input not empty
        //     if (textInput.value) {
        //         //create text without controls
        //         anyTask.textContent = textInput.value;
        //         //add text at the end of the div
        //         areaForText.appendChild(anyTask);
        //         //add task to the arr
        //         tasksArr.push(anyTask);

        //         //create controls function
        //         function createControls(type, symbol) {
        //             //create new <span></span>
        //             let typeControl = document.createElement('span');
        //             //give it the class
        //             typeControl.classList.add(`input-inner__${type}task`);
        //             //give it the content
        //             typeControl.innerHTML = symbol;
        //             //add controls at the end of the div
        //             anyTask.appendChild(typeControl);
        //             //add controls to the arr
        //             controlsArr.push(typeControl);
        //         }
        //         //create for "done" element
        //         createControls('done', '&#10004');
        //         //create for "delete" element
        //         createControls('delete', '&#10008');
        //         //else input is empty
        //     } else if (
        //         textInput.value == '' ||
        //         textInput.value == null ||
        //         textInput.value == ' '
        //     ) {
        //         console.log('Empty');
        //     }
        //     //clear the input after click
        //     textInput.value = '';
        //     // doneTask();
        //     // deleteTask();
    });
}

// //     //done task button
// //     function doneTask() {
//         //var for done-button
//         /*//TODO: How to get all elements (not only one)
//          **Need to figure out with this
//          **Maybe create new Arr
//          **Where will be all tasks?
//          **Or newclassnames with ID at the end?
//          */
//         for (let i = 0; i < controlsArr.length; i++) {
//             controlsArr[i].addEventListener('click', () => {
//                 if (i % 2 == 0) {
//                     /*//TODO:Find the solution of this
//                      **Why this works with .add
//                      **But doesn't work with .toggle?
//                      **IDK wtf
//                      */
//                     tasksArr[i / 2].classList.toggle('donetask');
//                     console.log(i);
//                 }
//             });
//         }
//         // console.log(controlsArr);
//     }

//     //delete task button
//     function deleteTask() {
//         //var for done-button
//         /*//TODO: How to get all elements (not only one)
//          **Maybe create new Arr
//          **Where will be all tasks?
//          **Or newclassnames with ID at the end?
//          */**Need to figure out with this
//
//         for (let i = 0; i < controlsArr.length; i++) {
//             controlsArr[i].addEventListener('click', () => {
//                 if (i % 2 !== 0) {
//                     console.log(tasksArr);

//                     tasksArr.splice(i, i);
//                     console.log('After del' + taskArr);
//                 }
//             });
//         }
//     }
// }

//new task function
createNewTask();