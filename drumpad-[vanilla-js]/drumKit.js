
const numberOfButtons = document.querySelectorAll(".button").length;

for (let j = 0; j < numberOfButtons; j++) {

    document.querySelectorAll(".button")[j]
        .addEventListener("click", function() {
            let buttonStyle = this.innerHTML;
            sound(buttonStyle);
            animation(buttonStyle);
        });


    document.addEventListener("keypress", function(event) {
        sound(event.key);
        animation(event.key);
    });


}

function sound(key) {
    switch (key) {
        case "w":
            const sound1 = new Audio("audio/tom.wav");
            sound1.play();
            break;

        case "a":
            const sound2 = new Audio("audio/snare.wav");
            sound2.play();
            break;

        case "s":
            const sound3 = new Audio('audio/openhat.wav');
            sound3.play();
            break;

        case "d":
            const sound4 = new Audio('audio/openhat.wav');
            sound4.play();
            break;

        case "j":
            const sound5 = new Audio('audio/hihat.wav');
            sound5.play();
            break;

        case "k":
            const sound6 = new Audio('audio/kick.wav');
            sound6.play();
            break;

        case "l":
            const sound7 = new Audio('audio/clap.wav');
            sound7.play();
            break;

        default: console.log(key);
    }
}

function animation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("animation");

    setTimeout(function() {
        activeButton.classList.remove("animation");
    }, 100);
}