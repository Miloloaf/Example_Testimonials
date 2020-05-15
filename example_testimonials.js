let ratings = document.querySelectorAll(".ratings")
let personIndex = 1
let numberOfPeople = 0

let person1 = new Person(
    "https://images.unsplash.com/photo-1504911539020-cfb0f7887a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80",
    "Sarah", 5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

let person2 = new Person(
    "https://images.unsplash.com/photo-1502898295-455afaf0f015?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80", 
    "Jessica", 4, "Great service for all photo occasions.");

let person3 = new Person(
    "https://images.unsplash.com/photo-1439402702863-6434b61e6392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "Skadii", 5, "Already booking my next photoshoot with Simon! Loved his energy!"
);

let person4 = new Person(
    "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "Igor", 4, "Amazing work by Simon, the photos he took increased my online impact three fold. Would recommend."
)

function Person(picUrl, name, rating, comment) {
    this.picUrl = picUrl;
    this.name = name;
    this.rating = rating;
    this.comment = comment;
    numberOfPeople += 1 ;
}

function fetchPerson(number){
    if (personIndex + number < 1) {
        personIndex = numberOfPeople
    }   
    else if (personIndex + number > numberOfPeople) {
        personIndex = 1
    }   
    else {personIndex += number}
    return eval("person"+personIndex.toString())

}

function getNewDims() {
    let newHeight = document.getElementById("testContainer").scrollHeight.toString() + "px";
    let newWidth = document.getElementById("testContainer").scrollWidth.toString() + "px";
    return [newHeight, newWidth]
}

function fade(){
    document.querySelector(".container").style.opacity = 0
    setTimeout(() => {
        document.getElementById("testContainer").style.opacity = 1
    }, 500);
}

function navNext(){
    let nextPerson = fetchPerson(1)
    createStructure(nextPerson);
    fade()
}

function navPrevious(){
    let previousPerson = fetchPerson(-1);
    createStructure(previousPerson)
}

function createStructure(person){
    setTimeout(() => {
    document.getElementById("pic").style.backgroundImage = "url("+person.picUrl+")"
    document.getElementById("testimonialName").innerHTML = person.name
    ratingSetter(person.rating)
    document.getElementById("testimonialText").innerHTML = person.comment
}, 500);
}

function ratingSetter(number) {
    ratings.forEach(rating => rating.classList.add("fa-star"));
    for (let i=4; i > number-1; i--){
        ratings[i].classList.remove("fa-star")
    }
}