document.getElementById("form-survey").addEventListener("submit", function(event){
event.preventDefault();
const inputName = document.getElementById("name").value;
const inputEmail = document.getElementById("email").value;
const inputAge = document.getElementById("age").value;


if(inputName === "" || inputEmail === "" || inputAge === ""){
    alert("Please fill out the name, email and age.");
}else if(inputName && inputEmail && inputAge){
    createUser(inputName, inputEmail, inputAge)
}else{
    alert("Invalid input. Please enter valid name, email and age.");
}
})


async function createUser(inputName, inputEmail, age) {
const url = "https://jsonplaceholder.typicode.com/users";

try{
    const response = await fetch(url, {
        method:'POST', 
        headers:{
            'Content-type': 'application/json' 
        },
        body: JSON.stringify({
            username: inputName,
            email : inputEmail,
            age : age 
        })
    })
    if(!response.ok){
        throw new Error(`Yanıt durumu: ${response.status}`);
    }
    const json = await response.json();
    console.log('Sunucu yanıtı:', json);
} catch(error){
    console.log('Hata:', error.message)
}

}