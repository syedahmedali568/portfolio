var forward = 0;
function abc() {
    console.log(event.keyCode)
    var WCharacter = document.getElementById('WCharacter')
    if (event.keyCode === 68) {
        forward = forward + 10;
        WCharacter.style.left = forward + 'px'
        // WCharacter.src = './Characters/wolverine/wolvie-claws.gif'
        WCharacter.src = './Characters/wolverine/wolvie-snes-walk.gif'
        

    }
    if (event.keyCode === 65) {
        forward = forward - 10;
        WCharacter.style.left = forward + 'px'
        WCharacter.src = './Characters/wolverine/wolvie-snes-walk.gif'

    }

}
window.onkeydown = abc