const inputMsg=document.querySelector(".input-bar");
const message=document.querySelector(".taskMsg");

function addTask(){
    event.preventDefault();
    if (inputMsg.value===''){
        alert("You should a enter task");
    }
    else{
        let li=document.createElement("li");
        message.appendChild(li);

        let taskText = document.createElement("span");
        taskText.textContent = inputMsg.value.trim();
        li.append(taskText);

        let button=document.createElement("button");
        button.classList.add("check-button");
        button.innerHTML= '<i class="fa-solid fa-check"></i>' ;
        li.prepend(button);

        let editbutton=document.createElement("obj");
        editbutton.classList.add("edit-button");
        editbutton.innerHTML='<i class="fa-regular fa-pen-to-square"></i>';
        li.append(editbutton);

        let span=document.createElement("span");
        span.classList.add("delete-button");
        span.innerHTML='<i class="fa-solid fa-trash-can"></i>';
        li.append(span);
         
        let date=document.createElement("date");
        date.classList.add("date");
        const now = new Date();
        const dateTime = now.toLocaleString();
        date.innerText=dateTime;
        li.append(date);

    }
    inputMsg.value="";
}
inputMsg.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        addTask();
    }
});
message.addEventListener("click", function(e) {
    if (e.target.closest(".check-button")) {
        let li = e.target.closest("li");
        li.classList.toggle("checked");
        li.add("disabled");

    } else if (e.target.closest(".delete-button")) {
        let li = e.target.closest("li");
        li.remove();
    }
    else if(e.target.closest(".edit-button")){
        let li=e.target.closest("li");
        editTask(li);
    }
});
function editTask(li) {
    let taskMsgspan=li.querySelector("span");
    let currentText = taskMsgspan.innerText;
    let newText = prompt("Edit your task:", currentText);
    if (newText !== null && newText !== '') {
        taskMsgspan.innerText = newText;
    }
}

