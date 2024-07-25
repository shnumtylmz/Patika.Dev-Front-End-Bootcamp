let taskInput = document.getElementById("task");
let addBtn = document.getElementById("liveToastBtn");
let listItem = document.querySelector("li");
let span = document.querySelector("span");
let list = document.getElementById("list");

const showToast = (toastClass) => {
    let toastElements = document.getElementsByClassName(toastClass);
    
    
    for (let toastEl of toastElements) {
        let toast = new bootstrap.Toast(toastEl);
        toast.show();
    }
}

let newElement = () => {
    let newListItem = document.createElement("li");
    inputValue = taskInput.value;
    let textNode = document.createTextNode(inputValue);

    newListItem.appendChild(textNode);

    if(inputValue === ""){
        showToast("error");
    } else {
        list.appendChild(newListItem);
        showToast("success");
        taskCompleted(newListItem);
        closeButton(newListItem);
    }
        taskInput.value = "";
}

const closeButton = (item) => {
    const closeBtn = document.createElement("span");
    closeBtn.textContent = "X";
    closeBtn.className = "close";

    item.appendChild(closeBtn);

    closeBtn.addEventListener("click", () => {
        item.remove();
    })

    item.addEventListener("mouseover", () => {
        closeBtn.style.display = "inline";
    });

    item.addEventListener("mouseout", () => {
        closeBtn.style.display = "none";
    });
}

const taskCompleted = (item) => {
    const icon = document.createElement("i");
    icon.classList.add("fa", "fa-check");
    icon.style.display = "none";
    item.insertBefore(icon, item.firstChild);

    item.addEventListener("click", () => {
        if(icon.style.display === "none"){
            icon.style.display = "inline";
            item.style.backgroundColor = "#458fff"; 
            item.style.textDecoration = "line-through";
        } else {
            icon.style.display = "none";
            item.style.backgroundColor = "#eee";
            item.style.textDecoration = "none";
        }
    });
}



const listItems = document.querySelectorAll("#list li");
listItems.forEach(item => {
    closeButton(item);
    taskCompleted(item);
});