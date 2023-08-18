// Create the Dog class here
export class Dog {

    constructor (dogData) {
        Object.assign(this, dogData)
    };

    getDogContainerHtml(){
        const { name, avatar, age, bio } = this

        return `
                <img src="${avatar}" alt="dog picture"
                    class="dog-img">
                <img src="images/badge-like.png" alt="like badge"
                    class="like-badge hidden" id="like-badge">
                <img src="images/badge-nope.png" alt="nope badge"
                    class="nope-badge hidden" id="nope-badge">
                <div class="details-container">
                    <p class="dog-details">${name}, ${age}</p>
                    <p class="dog-bio">${bio}</p>
                </div>
            `
    
    }
        


}