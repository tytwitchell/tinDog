// Remember to import the data and Dog class!

import { dogs } from './data.js'
import { Dog } from './Dog.js'

const dogObjects = dogs.map(dogData => new Dog (dogData))

const dislikeBtn = document.getElementById("dislike-btn")
const likeBtn = document.getElementById("like-btn")

dislikeBtn.addEventListener('click', () => handleBtnClick('nope-badge'))
likeBtn.addEventListener('click', () => handleBtnClick('like-badge'))

let currentDog = getRandomProfile();

function getRandomProfile() {

    const unSwipedDogs = dogObjects.filter(dog => !dog.hasBeenSwiped)

    if (unSwipedDogs.length > 0) {
        const randomDog = unSwipedDogs[Math.floor(Math.random()*unSwipedDogs.length)]
        return randomDog

    } else {
        getMessageHtml();
        setTimeout(render,500)
    }
}

function handleBtnClick(action) {

    document.getElementById(action).classList.remove('hidden');
    
    if (currentDog) {
        currentDog.hasBeenSwiped = true;
        currentDog = getRandomProfile();
        setTimeout(render,500)
    } else {
        setTimeout(() => {
            getMessageHtml();
            render()
        },500)
    }

}

function getMessageHtml() {

    return  `
        <p class="message">No other eligible matches in your area :(</p>

    `

}


function render() {
    const dogContainer = document.getElementById("dog-container");

    if (currentDog) {
        const renderedHtml = currentDog.getDogContainerHtml();
        dogContainer.innerHTML = renderedHtml;
    } else {
        dogContainer.innerHTML = getMessageHtml();
    }

}

render()

