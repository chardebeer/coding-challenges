
//Just a function that prints my name to the console and html

function greeter(name){
    console.log("Hey,  " + name + " ✨");

    document.getElementById("greeting").innerHTML = "Hey, " + name + " ✨";
}

greeter("Charlize")

//Adding Basic Data Types

function doTheMath(secondInt, secondDec, secondStr){
    const firstInt = 44;
    const firstDec = 9.9;
    const firstStr = "Kawaii ✨";

    let int = parseInt(firstInt + secondInt);
    console.log(int);
    document.getElementById("int").innerHTML = firstInt + " + " + secondInt + " = " + int  ;


    let dec = parseFloat(firstDec + secondDec);
    console.log(dec);
    document.getElementById("dec").innerHTML = firstDec + " + " + secondDec + " = " + dec  ;

    let str = firstStr.concat(secondStr);
    console.log(str);
    document.getElementById("str").innerHTML = str ;

}

doTheMath(99, 4.4, ' Chaos')

