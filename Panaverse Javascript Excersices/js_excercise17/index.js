const peopleInvited = ["Zain","Jameel","Islamuddin"];

peopleInvited.forEach(people => {
    console.log(people);
});

console.log(peopleInvited[1] + " can't make it.");


peopleInvited[1] = "daniyal";

peopleInvited.forEach(people => {
    console.log(people);
});


console.log("The dinner table is now bigger. And I'm inviting more guests.");


peopleInvited.unshift("Ali");

peopleInvited.splice(Math.floor(peopleInvited.length / 2), 0, "Shahzaib");

peopleInvited.push("Hamza");

peopleInvited.forEach(people => {
    console.log("Hello, " + people + " you are invited to the dinner.");
});