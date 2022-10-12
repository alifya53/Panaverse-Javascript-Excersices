const uesrNames = ["CEO", "MANAGER", "HR", "Admin", "DIRECTOR"];

for (const uesrName of uesrNames) {
    if (uesrName === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${uesrName}, thank you for logging in again.`)
    }
}