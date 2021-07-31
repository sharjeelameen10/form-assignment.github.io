//Name: Muhammad SHarjeel
//Roll No: 20301

// Question 1

let itemsArray = [
    { name: "Keychain", price: 100, quantity: 3 },
    { name: "Play Toy", price: 300, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "Short", price: 100, quantity: 2 }
];

var overallPrice = 0;
itemsArray.forEach((item, index) => {
    console.log(`Price Of ${item.name} Is: ${item.price} And Total Price Of Quantity: ${item.quantity} Is, ${item.price*item.quantity}`)
    overallPrice = overallPrice + item.price;
})

console.log(`\nTotal Price of is ${overallPrice}`)

// Question 2


let person = {
    firstName: "Muhammad",
    lastName: "Sharjeel",
    email: "Sharjeeelameen16@gmail.com",
    password: "123456789",
    age: 20,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan"
}

if (person.age || person.country) {
    console.log(`\nAge Property Is Available In The Object, It's value is: ${person.age}`);
    console.log(`\nCountry Property Is Available In The Object, It's value is: ${person.country}`)
} else {
    console.log("Not Available!")
}
if (person.firstName || person.lastName) {
    console.log(`\nFirst Name Property Is Available In The Object, It's value is: ${person.firstName}`);
    console.log(`\nLast Name Property Is Available In The Object, It's value is: ${person.lastName}`)
} else {
    console.log("Not Available!")
}





// Question 3

function Androids(name, price, bluetooth, simslot) {
    this.name = name
    this.price = price
    this.bluetooth = bluetooth
    this.simslot = simslot
}

let Samsung_S10 = new Androids("Samsung S21", 50000, "No", "Yes")
let Samsung_S20 = new Androids("Samsung S20", 150000, "No", "Yes")
let Samsung_S21_Ultra = new Androids("Samsung S21 Ulra", 200000, "No", "Yes")


console.log(`${Samsung_S10.name} Price: ${Samsung_S10.price}`)
console.log(`${Samsung_S20.name} Price: ${Samsung_S20.price}`)
console.log(`${Samsung_S21_Ultra.name} Price: ${Samsung_S21_Ultra.price}`)




// Question 4

function Users(Name, Gender, Address, Education, Profession) {
    this.Name = Name;
    this.Gender = Gender;
    this.Address = Address;
    this.Education = Education;
    this.Profession = Profession;
}


function onSubmit() {
    let name = document.getElementById("Name").value
    let gender = document.getElementById("male").checked ? "Male" : "Female"
    let address = document.getElementById("Address").value
    let education = document.getElementById("Education").value
    let profession = document.getElementById("Profession").value

    let newUser = new Users(name, gender, address, education, profession)
    let previusData = JSON.parse(localStorage.getItem("Users"))
    if (JSON.parse(localStorage.getItem("Users")) != null) {
        localStorage.setItem("Users", JSON.stringify([...previusData, newUser]))

    } else {
        localStorage.setItem("Users", JSON.stringify([newUser]))
    }
    document.getElementById("Name").value = ""
    document.getElementById("Address").value = ""
    console.log(localStorage.getItem("Users"))
}