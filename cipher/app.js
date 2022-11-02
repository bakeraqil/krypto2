//Cipher bellow

let isActiveUncipher = false

let isActive = false

let button = document.getElementById("btn");
let outPut = document.getElementById("output");

button.addEventListener("click", function () {

 isActive = true

  let inputValue = document.getElementById("input").value;

  let inputValueArray = inputValue.split("");

  for (let i = 0; i < inputValueArray.length; i++) {
    if (inputValueArray[i] === "a") {
        outPut.textContent += "1";
    } else if (inputValueArray[i] === "b") {
        outPut.textContent += "2";
    }else if (inputValueArray[i] === "c") {
        outPut.textContent += "3";
    }else if (inputValueArray[i] === "d") {
        outPut.textContent += "4";
    }else if (inputValueArray[i] === "e") {
        outPut.textContent += "5";
    }else if (inputValueArray[i] === "f") {
        outPut.textContent += "6";
    }else if (inputValueArray[i] === "g") {
        outPut.textContent += "7";
    }else if (inputValueArray[i] === "h") {
        outPut.textContent += "8";
    }else if (inputValueArray[i] === "i") {
        outPut.textContent += "9";
    }else if (inputValueArray[i] === "j") {
        outPut.textContent += "10-";
    }else if (inputValueArray[i] === "k") {
        outPut.textContent += "11-";
    }else if (inputValueArray[i] === "l") {
        outPut.textContent += "12-";
    }else if (inputValueArray[i] === "m") {
        outPut.textContent += "13-";
    }else if (inputValueArray[i] === "n") {
        outPut.textContent += "14-";
    }else if (inputValueArray[i] === "o") {
        outPut.textContent += "15-";
    }else if (inputValueArray[i] === "p") {
        outPut.textContent += "16-";
    }else if (inputValueArray[i] === "q") {
        outPut.textContent += "17-";
    }else if (inputValueArray[i] === "r") {
        outPut.textContent += "18-";
    }else if (inputValueArray[i] === "s") {
        outPut.textContent += "19-";
    }else if (inputValueArray[i] === "t") {
        outPut.textContent += "20-";
    }else if (inputValueArray[i] === "u") {
        outPut.textContent += "21-";
    }else if (inputValueArray[i] === "v") {
        outPut.textContent += "22-";
    }else if (inputValueArray[i] === "w") {
        outPut.textContent += "23-";
    }else if (inputValueArray[i] === "x") {
        outPut.textContent += "24-";
    }else if (inputValueArray[i] === "y") {
        outPut.textContent += "25-";
    }else if (inputValueArray[i] === "z") {
        outPut.textContent += "26-";
    }else if (inputValueArray[i] === "ä") {
        outPut.textContent += "27-";
    }else if (inputValueArray[i] === "ö") {
        outPut.textContent += "28-";
    }else if (inputValueArray[i] === "å") {
        outPut.textContent += "29-";
    } else if (inputValueArray[i] = "/") {
      outPut.textContent += " ";
  }  else {
      outPut.innerText += "(" + inputValueArray[i] + ")";

    }
  }
});


let input = document.getElementById("input")

input.addEventListener("click", function(){
if (isActive ){
    outPut.innerHTML = "-"
    isActive = false
}

})
