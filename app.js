// document.addEventListener("click", changeColor, false);
// function changeColor() {
//     document.body.style.backgroundColor = "#FFC926";
// }

setInterval(function () {
    $color = generateColor();
    $('body')
        .css('background-color', $color)
        .text($color);
}, 2000);

// Generates random color 
function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
};
