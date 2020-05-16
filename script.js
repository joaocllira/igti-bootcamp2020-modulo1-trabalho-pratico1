function changeColorValue(event, color) {
    let value = event.target.value;

    document.querySelector(`#${color}Text`).value = value;

    changeSquareColor();
}

function changeSquareColor() {
    let red = document.querySelector('#redText').value;
    let green = document.querySelector('#greenText').value;
    let blue = document.querySelector('#blueText').value;

    document.querySelector('.coloredBox').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function resetColors() {
    document.querySelector('#red').value = 0;
    document.querySelector('#green').value = 0;
    document.querySelector('#blue').value = 0;

    document.querySelector('#redText').value = 0;
    document.querySelector('#greenText').value = 0;
    document.querySelector('#blueText').value = 0;

    changeSquareColor();
}