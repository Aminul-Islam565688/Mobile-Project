var circle=document.getElementById("circle")
var upBTN=document.getElementById("upBTN")
var downBTN=document.getElementById("downBTN")

var rotateValue=circle.style.transform;
var rotateSum;


upBTN.onclick = function(){
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
}
downBTN.onclick = function(){
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
}
