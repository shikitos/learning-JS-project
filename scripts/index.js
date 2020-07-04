/*******************
 * TODO:
 *  - Submit task on enter press
 *  - Fix lines wrapping
 */

function createNewTask() {
    /************************
    Comments need to be made!!!
    *************************/

    /*
    Descripiton of variables
    */
    let textInput = document.getElementById('text-input');
    let submitButton = document.getElementById('text-btn');
    let areaForText = document.getElementById('inner-area');

    /*
    What happens here?
    */
    submitButton.addEventListener('click', () => {
        let anyTask = document.createElement('div');
        anyTask.classList.add('input-inner__task');
        if (textInput.value) {
            //create text without controls
            anyTask.textContent = textInput.value;
            areaForText.appendChild(anyTask);

            function createControls(type, symbol) {
                let typeControl = document.createElement('span');
                typeControl.classList.add(`input-inner__${type}task`);
                typeControl.innerHTML = `${symbol}`;
                anyTask.appendChild(typeControl);
            }
            createControls('done', "&#10004");
            createControls('delete', "&#10008");
        } else if (textInput.value == '' || textInput.value == null || textInput.value == ' ') {
            console.log("Empty");
        }
        textInput.value = '';
    });
}

// Is this a write way to call function after page loading?
createNewTask();