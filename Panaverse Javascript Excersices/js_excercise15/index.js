const peopleInvited  = ["Zain","Jameel","Islamuddin"]

peopleInvited.forEach(people => {
    console.log(people);
});

console.log(peopleInvited[1] + " can't make it.");


peopleInvited[1] = "Shahzaib";

peopleInvited.forEach(people => {
    console.log(people);

});