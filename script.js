


const inputTask = document.getElementById('inputTask');
const listContainer = document.getElementById('listContainer');
const tombol = document.getElementById('tombol');
const taskCount = document.getElementById('taskCount');

tombol.onclick = function() {
    if (inputTask.value === '') {
        alert('Kamu belum memasukkan to do list!');
    } else {
        let li = document.createElement('li');
        li.textContent = inputTask.value;
        listContainer.append(li);
        let span = document.createElement('span');
        span.textContent = '\u00d7';
        li.append(span);
        inputTask.value = '';
    }
    saveData();
    updateTaskCount();
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('done');

    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
    saveData();
    updateTaskCount();
});

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

function updateTaskCount() {
    const unfinishedTasks = listContainer.querySelectorAll('li:not(.done)');
    taskCount.textContent = unfinishedTasks.length;
}

showTask();
updateTaskCount();