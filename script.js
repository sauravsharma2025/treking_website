var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

var div = document.createElement("div");
div.id =  "mydiv";
div.style.border = "5px solid black";
div.style.display = "flex";
div.style.position = "absolute";
div.innerHTML = "Divya Gupta";

document.getElementById("mydiv_id").appendChild(div);

