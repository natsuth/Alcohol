var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");

output1.innerHTML = slider1.value;

slider1.oninput = function() {
output1.innerHTML = this.value;
$("#to11").show();
if (slider1.value == 1){
    output1.innerHTML = '1';
} else if (slider1.value == 2){
    output1.innerHTML = '2';
} else if (slider1.value == 3){
    output1.innerHTML = '3';
} else if (slider1.value == 4){
    output1.innerHTML = '4';
} else if (slider1.value == 5){
    output1.innerHTML = '5';
} else if (slider1.value == 6){
    output1.innerHTML = '6';
} else if (slider1.value == 7){
    output1.innerHTML = 'มากกว่า6';
}
return a = +document.getElementById(myRange1).value;
}

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
var outputimg2 = document.getElementById("timeimg")


output2.innerHTML = slider2.value;

slider2.oninput = function() {
output2.innerHTML = this.value;
$("#to8").show();
outputimg2.src = 'image/p7/time'+this.value+'.png';
if (slider2.value == 1){
    output2.innerHTML = '10';
} else if (slider2.value == 2){
    output2.innerHTML = '20';
} else if (slider2.value == 3){
    output2.innerHTML = '30';
} else if (slider2.value == 4){
    output2.innerHTML = '40';
} else if (slider2.value == 5){
    output2.innerHTML = '50';
} else if (slider2.value == 6){
    output2.innerHTML = '60';
}
  return g = +this.value;
}
