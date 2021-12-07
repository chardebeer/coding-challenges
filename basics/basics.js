
//Just a function that prints my name to the console and html

function greeter(name){
    console.log("Hey,  " + name + " ✨");

    document.getElementById("greeting").innerHTML = "Hey, " + name + " ✨";
}

greeter("Charlize")

