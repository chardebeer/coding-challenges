
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

// Conditional Statements

function gradeScore(score){
    if( 25 < score){
        return "A";
    }
    else if (20 < score ){
        return "B";
    }
    else if (15 < score ){
        return "C";
    }
    else if (10 < score ){
        return "D";
    }
    else if( 5 < score ){
        return "E";
    }
    else {
        return "F";
    }
}

document.getElementById("pass").innerHTML = gradeScore(26) ;
document.getElementById("avg").innerHTML = gradeScore(17) ;
document.getElementById("fail").innerHTML = gradeScore(2) ;

//Loops


function vowelsAndConsonants(str){

    const vowels = ["a", "e", "i", "o", "u"];
    const string = str.split("");
    let vowelArr = [];
    let constArr = [];

    for (let i = 0; i < string.length; i++){

        //This is a ternary operator
        vowels.includes(string[i]) ? vowelArr.push(string[i]) : constArr.push(string[i]);

    }

    for (let i = 0; i < vowelArr.length; i++){
        console.log(vowelArr[i])
    }

    for (let i = 0; i < constArr.length; i++){
console.log(constArr[i]);
    }

}

vowelsAndConsonants("Hey tomorrow, fuck you, and all your friends yesterday")