function multi(number1, number2){
  return number1*number2;
}


function addLinks(){
  for (var i=0, link; i<5; i++){
    link=document.createElement("a");
    link.innerHTML="Link"+i;
    link.onclick=function(){
      alert(i);
    };
    document.body.appendChild(link);
  }
}
//window.onload=addLinks;

function add(x){
  return function (y){
    return x+y;
  };
}

var add5=add(10);
var no8=add5(3);
//alert(no8);

String.prototype.ucfirst=function(){
  return this.charAt(0).toUpperCase()+this.slice(1);
  debugger;
};

console.log("a".ucfirst())
