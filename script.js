//include it here all the id's

const title = document.getElementById("title");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const output = document.getElementById("output");

//query selector
const description = document.querySelector(".description");
const button = document.querySelector("#btnClick");

//event handler
button.addEventListener("click", function(){
    //visual content
    button.textContent = "Clicked!";
    
    let name = nameInput.value;
    let age = ageInput.value;

    output.innerHTML = "<p style ='color:GREEN;'> Button was clicked! </p>";

    //loose equality
    if(age==18){
        output.innerHTML += "<p style='color:GREEN;'> You are 18 years old! </p>";
    }
    else{
        output.innerHTML += "<p style'color:RED;'> You are not 18 years old! </p>";
    }

    //strict equality
    if(age==='18'){
        output.innerHTML += "<p style='color:GREEN;'> You are 18 years old! (STRICT) </p>";
    }
    else {
        output.innerHTML += "<p style='color:RED;'> You are not 18 years old! (STRICT) </p>";
    }

    if(name != ""){
        output.innerHTML += "<p style='color:WHITE;'> Hello, " + name +
        " I am " + age + "! </p>";
    }
    else{
        output.innerHTML += "<p style='color:WHITE;'> Please enter your name! </p>";
    }

});