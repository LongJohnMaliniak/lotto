i = 1;

function lotto() {
    while (i < 7) {  
        console.log(Math.floor(Math.random() * 50) + 1);
        i++;
    }
}
console.log(lotto())