
var button = document.querySelector('button');
var box = document.getElementById('changeMe');

function toggleBlue() {
    if (box.style.background != 'blue') {
        box.style.background = 'blue';
    } else {
        box.style.background = 'red';
    }
}
button.onclick = function toggleGreen() {
    if (box.style.background != 'green') {
        box.style.background = 'green';
    } else {
        box.style.background = 'red';
    }
}
