/*Função síncrona JavaScript
function sumNumbers() {
    let result = 1 + 1

    if (result == 2) {
        sucessCallback()
    } else {
        errorCallback()
    }
}

function sucessCallback() {
    console.log("Yeah! Number 2!")
}

function errorCallback() {
    console.log("Oops! Something wrong.")
}

sumNumbers();
*/

//Função assíncrona ou Promise
let p = new Promise ((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve("sucess!")
    } else {
        reject("failed.")
    }
});

p.then((message) => {
    console.log("This is in the the " + message)
}).catch((err) => {
    console.log("This is the catch " + err)
});