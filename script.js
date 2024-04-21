var drone = document.getElementById('drone');
var position = 20;
var upPressed = false;
var downPressed = false;

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        upPressed = true;
    }
    if (event.key === 'ArrowDown') {
        downPressed = true;
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {
        upPressed = false;
    }
    if (event.key === 'ArrowDown') {
        downPressed = false;
    }
});

function moveDrone() {
    if (upPressed) {
        position += 5;
    }
    if (downPressed) {
        position -= 5;
    }
    drone.style.bottom = position + 'px';
    requestAnimationFrame(moveDrone);
}

moveDrone();
