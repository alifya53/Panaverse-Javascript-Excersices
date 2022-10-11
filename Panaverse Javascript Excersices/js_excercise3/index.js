const Myname = "AliFya HussAin"

console.log("Name in Uppercase",Myname.toUpperCase());
console.log("Name in Lowercase",Myname.toLowerCase());

let title=Myname.split(" ").map(w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(" ");
console.log("Name in Title case : "+title);

