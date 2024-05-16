function showName () {
var name = "Andile";
var nameDisplay = document.getElementById('nameDisplay');

nameDisplay.textContent = 'Hello ' + ' My name is  ' + name + '!';
nameDisplay.style.display = 'block'; 
}

var button = document.getElementById('showNameButton');
button.addEventListener('click', showName);