console.log("index");
var index = document.getElementById("index");
index.style.width = "200px";
index.style.height = "200px";
index.style.fontSize = "20px";
index.style.color = "black";
var counter = 0;

function onClick(el){
    counter++;
    document.getElementById("index").innerHTML="вы нажали на кнопку: " + counter + " раз";
    if(counter%10 == 0)
        console.log("вы нажали на копку: " + counter + " раз");
    if(counter%50 == 0)
        alert("вы нажали на кнопку уже " + counter + " раз!!!");
}

function checkForm(el){
    var name = el.name.value;
    console.log(name);

    return false;
}

var zmiennavar='var';
let zmiennalet='let';
const stala=5;

var str_1 = '12'
var str_2 = 2

console.log(str_1 + str_2);

console.log(stala);

if("0" == 0) {
    var test="Test";
}
else{
    var test1="Test1";
}

console.log(test, test1);

