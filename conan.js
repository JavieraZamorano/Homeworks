function powpow(baseNumber, power) {
    let result = 1;

    if (power == 1) {
      return result * baseNumber;
    }
    else {
        return baseNumber * powpow(baseNumber, power-1);
    }

}

document.getElementById("conan").innerText = powpow(4,2);

let myNumber = 1;

setInterval(function() {
    document.getElementById("interval").innerText = myNumber;
    myNumber += 1;
},300);


// Write the fibonacci with the recursion similar to powpow where writng fib(7) would give me 13 fib(3) 2

// write a set timeout that updates the screen every 1 second but with a set timeout that uses recursion 