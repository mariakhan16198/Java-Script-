var billArray = [124, 48, 268]; 
var tipsArray = []; 
var billtip = []; 

function total(bill)
{
  var percent;
  if ( bill <= 50) {
      percent = 0.2;  }
  else if (50 < bill <= 200) {
          percent = 0.15;
    }
  else {
          percent = 0.1;
    }
    return percent *  bill
  }

for (i = 0; i< billArray.length; i++)
{
  tipsArray[i] = total(billArray[i]);
  billtip[i] = billArray[i] + tipsArray[i];
  console.log([i] + '. total tip: ' + tipsArray[i]);
}

console.log('Bills before tips: ' + billArray.toString());
console.log('Final Amounts: ' + billtip.toString());









