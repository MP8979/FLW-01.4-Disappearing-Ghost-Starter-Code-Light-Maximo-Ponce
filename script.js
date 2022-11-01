//html element and selector variables
let p = document.createElement("p");
let h1 = document.querySelector(".header");
let input = document.querySelector(".input");
let userInput;
let message = document.querySelector('.message');

//declare variable for ghost image
let ghost = document.querySelector(".ghost-image");

//declare variables for all of the buttons
let hideBtn = document.querySelector(".hide-button");
let showBtn = document.querySelector(".show-button");
let updateBtn = document.querySelector(".update-img-button");
let messageBtn = document.querySelector(".message-button");
let nameBtn = document.querySelector(".name-button");


//create an onclick event for the Hide Me button
hideBtn.onclick = (function (){  
    ghost.style.display = "none";
});

//create an onclick event for the Show Me button

showBtn.onclick = function(){
    ghost.style.display = "initial";
}

//create an onclick event for the Update Img button

updateBtn.onclick = function(){
    ghost.src = "https://media.tenor.com/U2B-0E0VxCIAAAAM/ghost-spooky.gif"
  
}

updateBtn.ondblclick = function(){
    ghost.src = "images/pngfind.com-snapchat-logo-png-transparent-522479.png"
}

//create an onclick event for the Send Message button
//update the userInput variable by saving the value of the input
//use the insertAdjacentHTML method to append the userInput in a <p> tag

messageBtn.onclick = function() {
  userInput = input.value
  message.insertAdjacentHTML('beforeend', `<p>${userInput}</p>`);
    
}


//create an onclick event for the Name Me button
//update the userInput variable by saving the value of the input
//use the innerHTML method to update the h1 tag

nameBtn.onclick = function(){
  userInput = input.value
  h1.innerHTML = userInput
}