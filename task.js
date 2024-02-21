document.addEventListener('DOMContentLoaded', function() {
    const submit = document.getElementById('submit');
    const newTask = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');
    const taskForm = document.getElementById('taskForm');

    submit.disabled = true;

    newTask.addEventListener('input', function() {
        submit.disabled = !newTask.value.trim();
    });

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const taskText = newTask.value.trim();
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            taskList.appendChild(listItem);

            newTask.value = '';
            submit.disabled = true;
        }

        return false;
    });
});
