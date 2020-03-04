var mark={
    name:"MARK",
    mass:prompt("input marks mass:"),
    height:prompt("input marks height:"),
    bmi:function(){
        this.mark_bmi = this.mass/(this.height*this.height);
        return this.mark_bmi;
    }
}
mark.bmi();
console.log(mark)

var john={
    name:"JHON",
    mass:prompt("input john mass:"),
    height:prompt("input john height:"),
    bmi:function(){
        this.john_bmi = this.mass/(this.height*this.height);
        return this.john_bmi;
    }
}
john.bmi();
console.log(john);
if(mark.mark_bmi > john.john_bmi){
    console.log(mark.name + ' has a higher BMI');
  }
  else  if (mark.mark_bmi < john.john_bmi){
    console.log(john.name + ' has a higher BMI');
  } else {
    console.log(mark.name + ' and ' + john.name + ' has the same BMI');
  }