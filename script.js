


const inputTask = document.getElementById('inputTask');
inputTask.addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        updateTaskCount();
        console.log("Tombol Enter ditekan");
    }
});

const tombol = document.getElementById('tombol');
tombol.onclick = function() {
    if (inputTask.value === '') {
        alert('HEYY Kamu belum memasukkan to do list!');
        console.log("Tugas tidak dapat ditambahkan karena input kosong");
    } else {
        let li = document.createElement('li');
        li.textContent = inputTask.value;
        listContainer.append(li);
        let span = document.createElement('span');
        span.textContent = '\u00d7';
        li.append(span);
        console.log(`Tugas baru ditambahkan: "${inputTask.value}"`);
        inputTask.value = '';
    }
    saveData();
    updateTaskCount();
}

const listContainer = document.getElementById('listContainer');
listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('done');
        console.log(`Status tugas "${e.target.textContent}" diperbarui`);
    } else if (e.target.tagName === 'SPAN') {
        const tugasDihapus = e.target.parentElement.textContent;
        e.target.parentElement.remove();
      console.log(`Tugas "${tugasDihapus}" telah dihapus`);
    }
    saveData();
    updateTaskCount();
});

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
    console.log("Data tugas berhasil disimpan");
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
    console.log("Data tugas berhasil ditampilkan");
}

const taskCount = document.getElementById('taskCount');
function updateTaskCount() {
    const unfinishedTasks = listContainer.querySelectorAll('li:not(.done)');
    taskCount.textContent = unfinishedTasks.length;
    console.log(`Jumlah tugas belum selesai: ${unfinishedTasks.length}`);
}


inputTask.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        tombol.click();
    }
});

showTask();
updateTaskCount();