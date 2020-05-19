window.addEventListener('load', start);

function start() {
    document.querySelectorAll('.handlerInput').forEach(input => {
        input.addEventListener(
            'mousemove',
            (event) => {
                document.querySelector(`#${input.id}Text`).value = event.target.value;
                changeSquareColor(event, input.id);
            },
            false
        );
        console.log(input);
    });
}

function changeSquareColor() {
    let [red, green, blue] = Array.from(document.querySelectorAll('.handlerInput')).map(color => color.value);
    document.querySelector('.coloredBox').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function resetColors() {
    document.querySelectorAll('.handlerInput').forEach(input => input.value = 0);
    document.querySelectorAll('.inputText').forEach(text => text.value = 0);
    
    changeSquareColor();
}
