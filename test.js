peeps = 0

let person1 = new Person(
    "https://images.unsplash.com/photo-1516571240888-5ec11f5569e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    "Sarah", 5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

let person2 = new Person(
    "https://images.unsplash.com/photo-1502898295-455afaf0f015?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80", 
    "Jessica", 4, "Great service for blah blah");


const peopleArr = [person1, person2]

Object.keys(peopleArr)

console.log(Object.keys(peopleArr))

function Person(picUrl, name, rating, comment) {
    this.picUrl = picUrl;
    this.name = name;
    this.rating = rating;
    this.comment = comment;
    peeps += 1

}

console.log(peeps)