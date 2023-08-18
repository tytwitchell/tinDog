// Remember to import the data and Dog class!

import { dogs } from './data.js'
import { Dog } from './Dog.js'

const dogObjects = dogs.map(dogData => 
    new Dog (
        dogData
    )
)


const dislikeBtn = document.getElementById("dislike-btn")
const likeBtn = document.getElementById("like-btn")


dislikeBtn.addEventListener('click', () => handleBtnClick('nope-badge'))
likeBtn.addEventListener('click', () => handleBtnClick('like-badge'))

function handleBtnClick(action) {

    document.getElementById(action).classList.remove('hidden');
    
    if (dogObjects.length) {
        dogObjects.shift();
        setTimeout(render,500)
    } else {
        getMessageHtml();
        setTimeout(render,500)
    }

}

function handleLikeBtn() {

    document.getElementById("like-badge").classList.remove('hidden');

    if (dogObjects.length) {
        dogObjects.shift();
    } else {
        getMessageHtml();
    }

    setTimeout(render,500)
}


function getMessageHtml() {

    return  `
        <p class="message">No other eligible matches in your area :(</p>

    `

}



function render() {
    const dogContainer = document.getElementById("dog-container");
    const renderedHtml = dogObjects.length > 0 ? dogObjects[0].getDogContainerHtml() 
    : getMessageHtml();
    dogContainer.innerHTML = renderedHtml;

}

render()

