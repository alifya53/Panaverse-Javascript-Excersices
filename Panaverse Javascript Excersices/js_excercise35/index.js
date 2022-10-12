const animals = ["Dog", "Cat", "Elephant"];

for (let i = 0; i < animals.length; ++i) {
    if (animals[i] === "Dog") {
        console.log("A dog would make a great pet.")
    } else if (animals[i] === "Cat") {
        console.log("Cat is a good pet")
    } else if (animals[i]==="Elephant") {
        console.log("Elephant is not a pet")
    }
}
console.log("All of these pets have four legs")