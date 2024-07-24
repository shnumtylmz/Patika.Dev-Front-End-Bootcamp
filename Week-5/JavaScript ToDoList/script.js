document.addEventListener("DOMContentLoaded",  () => {
    function newElement(){
        taskInput = document.getElementById("task").value.trim();

        if(taskInput === ""){
            showErrorToast("Boş değer girdiniz!")
            return;
        }
        

        const list = document.getElementById("list");
        const listItem = document.querySelectorAll("li");
        listItem.textContent = taskInput;
        list.appendChild();  
        document.getElementById("task").value = "";
        showSuccessToast("Başarıyla eklendi!")
    }
        
    const showSuccessToast = () =>{
        let toastSuccess = document.getElementById("toastSuccess");
        let successBody = document.querySelector(".toast-body");
    
        successBody.textContent = message;
        $(toastSuccess).toast("show");
    }
    
    const showErrorToast = () => {
        let toastError = document.getElementById("toastError");
        let errorBody = document.querySelector(".toast-body");
        errorBody.textContent = message;
        $(toastError).toast("show");
    }
    
    document.getElementById("liveToastBtn").addEventListener("click", newElement());
});



