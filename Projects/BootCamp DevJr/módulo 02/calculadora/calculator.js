function calc(op){


    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = 0;
   
    switch(op) {

case '+' : result = num1 + num2; break;
case '-' : result = num1 - num2; break;
case '*' : result = num1 * num2; break;
case '/' : result = num1 / num2; break;
case (num1 && num2 == undefined): var result = "Insira os valores"; break;

    }

   
    document.getElementById("result").value = result;
var newHistory = "<div>" + num1 + " " + op + " " + num2 + " = " + result + "</div>";
var history =  document.getElementById("history");
   history.innerHTML =  newHistory + history.innerHTML ;

   if(history.children.length > 10)
   {
    history.removeChild(history.childNodes[10]);
   }

}
