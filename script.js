function start_button() {
    const button = document.getElementById('start-button');

    if (button.classList.contains('start-button')) {
        button.classList.remove('start-button');
        button.classList.add('start-button-pressed');
    } else {
        button.classList.remove('start-button-pressed');
        button.classList.add('start-button');
    }
}

/* PONG WINDOW */
function pong_button() {
    const button = document.getElementById('openPong');

    if (button.classList.contains('program')) {
        button.classList.remove('program');
        button.classList.add('program-pressed');
    } else {
        button.classList.remove('program-pressed');
        button.classList.add('program');
    }
}


document.getElementById("openPong").addEventListener("click", function() {
    document.getElementById("pongWindow").style.display = "block";
});

function closePong() {
    document.getElementById("pongWindow").style.display = "none";
    const button = document.getElementById('openPong');


    if (button.classList.contains('program-pressed')) {
        button.classList.remove('program-pressed');
        button.classList.add('program');
    }
}

let isDraggingPong = false;
let offsetXPong, offsetYPong;

function startDragPong(e) {
    isDraggingPong = true;
    offsetXPong = e.clientX - pongWindow.getBoundingClientRect().left;
    offsetYPong = e.clientY - pongWindow.getBoundingClientRect().top;
}

function stopDragPong() {
    isDraggingPong = false;
}

function dragPong(e) {
    if (!isDraggingPong) return;
    let x = e.clientX - offsetXPong;
    let y = e.clientY - offsetYPong;
    pongWindow.style.left = x + 'px';
    pongWindow.style.top = y + 'px';
}

let pongWindow = document.getElementById("pongWindow");
let titleBarPong = document.querySelector(".window-pong-titlebar");

titleBarPong.addEventListener("mousedown", startDragPong);
pongWindow.addEventListener("mouseup", stopDragPong);
pongWindow.addEventListener("mousemove", dragPong);


/* FRIENDS WINDOW */
function friends_button() {
    const button = document.getElementById('openFriends');

    if (button.classList.contains('program')) {
        button.classList.remove('program');
        button.classList.add('program-pressed');
    } else {
        button.classList.remove('program-pressed');
        button.classList.add('program');
    }
}


document.getElementById("openFriends").addEventListener("click", function() {
    document.getElementById("friendsWindow").style.display = "block";
});

function closeFriends() {
    document.getElementById("friendsWindow").style.display = "none";
    const button = document.getElementById('openFriends');

    if (button.classList.contains('program-pressed')) {
        button.classList.remove('program-pressed');
        button.classList.add('program');
    }
}

let isDraggingFriends = false;
let offsetXFriends, offsetYFriends;

function startDragFriends(e) {
    isDraggingFriends = true;
    offsetXFriends = e.clientX - friendsWindow.getBoundingClientRect().left;
    offsetYFriends = e.clientY - friendsWindow.getBoundingClientRect().top;
}

function stopDragFriends() {
    isDraggingFriends = false;
}

function dragFriends(e) {
    if (!isDraggingFriends) return;
    let x = e.clientX - offsetXFriends;
    let y = e.clientY - offsetYFriends;
    friendsWindow.style.left = x + 'px';
    friendsWindow.style.top = y + 'px';
}

let friendsWindow = document.getElementById("friendsWindow");
let titleBarFriends = document.querySelector(".window-friends-titlebar");

titleBarFriends.addEventListener("mousedown", startDragFriends);
friendsWindow.addEventListener("mouseup", stopDragFriends);
friendsWindow.addEventListener("mousemove", dragFriends);
