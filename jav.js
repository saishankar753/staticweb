let btnFirst = document.querySelector(".btn1");
let btnSecond = document.querySelector(".btn2");
btnFirst.addEvenetListner( 'click', () => buttonFirst.Style.backgroundcolor = '#4cd137');
btnSecond.addEvenetListner( 'click', () => buttonSecond.Style.backgroundcolor = '#4cd137');
function val(value)
{
  var amt = document.getElementById('qnty').value;
  value=value*amt;
  document.getElementById('amnt').value=value;
}
function add()
{
var num = document.getElementById('qnty').value;
num++;
document.getElementById('qnty').value=num;
}
function sub()
{
  var num = document.getElementById('qnty').value;
  var sum=num-1;
  document.getElementById('qnty').value=sum;
}
