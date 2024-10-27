
// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     //show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');

// }
function continueGame(){
    const alphabet = getRandomAlphabet();
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}