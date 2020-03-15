var  int, x;
x = prompt("input marks mass:");

var int, y;
y = prompt("input marks height:");

var int, z;
z = prompt("input john mass:");

var int, w;
w = prompt("input john height:");

var mark_bmi;
mark_bmi = x/(y*y);
var john_bmi;
john_bmi = z/(w*w);
console.log(mark_bmi, john_bmi);
if(mark_bmi > john_bmi){
    //console.log('mark bmi is higher than john bmi ');

}
else{
    console.log('john bmi is higher than mark bmi');
}
console.log('hello wold')