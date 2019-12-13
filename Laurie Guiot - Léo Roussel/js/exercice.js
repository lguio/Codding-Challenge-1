// Tâche n°2

var nb_1= 4; 
var result = nb_1 /2
console.log(result);

function getDivision(){
    nb_1= document.getElementById("nb_1").value;
    var result = nb_1 /2;
    document.getElementById('result').innerHTML = result;  
} 

// Tâche n°3

var a= "Veuillez entrer un entier ..."; 
var result_tch3 = a;
console.log (result_tch3); 

<button onclick="moinsTen(-10)">moins 10</button>
        <button onclick="multipleFive()">*5</button>
        <button onclick="DivisebyTwo()">/2</button>
        <button onclick="reset()">Reset</button>

function moinsTen(){
    var result_tch3= a;
    document.getElementById('result_tch3').innerHTML = result_tch3;  
}

function multipleFive(){
    var result_tch3= a;
    document.getElementById('result_tch3').innerHTML = result_tch3; 
}

function reset(){
    document.getElementById('result_tch3').innerHTML = result_tch3; 
}