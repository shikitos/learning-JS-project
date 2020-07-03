function createNewTask() {
    let textInput = document.getElementById('text-input');
    let submitButton = document.getElementById('text-btn');
    let areaForText = document.getElementById('inner-area');
    submitButton.addEventListener('click', () => {
        let anyTask = document.createElement('div');
        anyTask.classList.add('input-inner__task');
        if (textInput.value) {
            anyTask.textContent = textInput.value;
            areaForText.appendChild(anyTask);
        } else if (textInput.value == '' || textInput.value == null || textInput.value == ' ') {
            console.log("Empty");
        }
        textInput.value = '';
    });
}

createNewTask();