function addTask(){
  let inputTask = document.getElementById('inputTask');
  let taskText = inputTask.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return
  }
  let ul = document.getElementById('taskList');
  let li = document.createElement('li');
  li.textContent = taskText;
  let delBtn = document.createElement('button');
  delBtn.textContent = 'X';
  delBtn.style.backgroundColor = 'red';
  delBtn.style.color = 'white';
  delBtn.style.fontWeight = 'bold';
  delBtn.style.border = 'none';
  delBtn.style.cursor = 'pointer';
  delBtn.onclick = function(){
    ul.removeChild(li);
  }
  li.appendChild(delBtn);
  ul.appendChild(li);
  inputTask.value = "";
}