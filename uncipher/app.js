

//Un-cipher bellow

let buttonUncipher = document.getElementById("btn-uncipher");
let outPutUncipher = document.getElementById("output-uncipher");

buttonUncipher.addEventListener("click", function () {
isActiveUncipher = true

  let inputValueUncipher = document.getElementById("input-uncipher").value;

  let inputValueUncipherArray = inputValueUncipher.split("");

  for (let i = 0; i < inputValueUncipherArray.length; i++) {
    if (inputValueUncipherArray[i] === "1") {
      outPutUncipher.textContent += "a";
    } else if (inputValueUncipherArray[i] === "2") {
      outPutUncipher.textContent += "b";
    } else if (inputValueUncipherArray[i] === "3") {
      outPutUncipher.textContent += "c";
    } else if (inputValueUncipherArray[i] === "4") {
      outPutUncipher.textContent += "d";
    } else if (inputValueUncipherArray[i] === "5") {
      outPutUncipher.textContent += "e";
    } else if (inputValueUncipherArray[i] === "6") {
      outPutUncipher.textContent += "f";
    } else if (inputValueUncipherArray[i] === "7") {
      outPutUncipher.textContent += "g";
    } else if (inputValueUncipherArray[i] === "8") {
      outPutUncipher.textContent += "h";
    } else if (inputValueUncipherArray[i] === "9") {
      outPutUncipher.textContent += "i";
    } else if (inputValueUncipherArray[i] === "10") {
      outPutUncipher.textContent += "j";
    } else if (inputValueUncipherArray[i] === "11") {
      outPutUncipher.textContent += "k";
    } else if (inputValueUncipherArray[i] === "12") {
      outPutUncipher.textContent += "l";
    } else if (inputValueUncipherArray[i] === "13") {
      outPutUncipher.textContent += "m";
    } else if (inputValueUncipherArray[i] === "14") {
      outPutUncipher.textContent += "n";
    } else if (inputValueUncipherArray[i] === "15") {
      outPutUncipher.textContent += "o";
    } else if (inputValueUncipherArray[i] === "16") {
      outPutUncipher.textContent += "p";
    } else if (inputValueUncipherArray[i] === "17") {
      outPutUncipher.textContent += "q";
    } else if (inputValueUncipherArray[i] === "18") {
      outPutUncipher.textContent += "r";
    } else if (inputValueUncipherArray[i] === "19") {
      outPutUncipher.textContent += "s";
    } else if (inputValueUncipherArray[i] === "20") {
      outPutUncipher.textContent += "t";
    } else if (inputValueUncipherArray[i] === "21") {
      outPutUncipher.textContent += "u";
    } else if (inputValueUncipherArray[i] === "22") {
      outPutUncipher.textContent += "v";
    } else if (inputValueUncipherArray[i] === "23") {
      outPutUncipher.textContent += "w";
    } else if (inputValueUncipherArray[i] === "24") {
      outPutUncipher.textContent += "x";
    } else if (inputValueUncipherArray[i] === "25") {
      outPutUncipher.textContent += "y";
    } else if (inputValueUncipherArray[i] === "26") {
      outPutUncipher.textContent += "z";
    } else if (inputValueUncipherArray[i] === "27") {
      outPutUncipher.textContent += "ä";
    } else if (inputValueUncipherArray[i] === "28") {
      outPutUncipher.textContent += "ö";
    } else if (inputValueUncipherArray[i] === "29") {
      outPutUncipher.textContent += "å";
    }
  }

});





let inputUncipher = document.getElementById("input-uncipher")

inputUncipher.addEventListener("click", function(){
if (isActiveUncipher ){
    outPutUncipher.innerHTML = "-"
    isActiveUncipher = false
}

})
