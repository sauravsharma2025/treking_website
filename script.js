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

var data=[
  {
    img:"https://www.thecrazymountaineers.com/images/packages/47/Kedarnath_Yatra_thumb.jpg",
    content:"the kedarnath trek",
    duration:6,
    Altitude:'12500ft',
    grade:'easy',
    Approx:'20km'
  },
  {
    img:"https://www.thecrazymountaineers.com/images/packages/47/Kedarnath_Yatra_thumb.jpg",
    content:"the kedarnath trek",
    duration:6,
    Altitude:'12500ft',
    grade:'easy',
    Approx:'20km'
  },
  {
    img:"https://www.thecrazymountaineers.com/images/packages/47/Kedarnath_Yatra_thumb.jpg",
    content:"the kedarnath trek",
    duration:6,
    Altitude:'12500ft',
    grade:'easy',
    Approx:'20km'
  },
  {
    img:"https://www.thecrazymountaineers.com/images/packages/47/Kedarnath_Yatra_thumb.jpg",
    content:"the kedarnath trek",
    duration:6,
    Altitude:'12500ft',
    grade:'easy',
    Approx:'20km'
  },
  {
    img:"https://www.thecrazymountaineers.com/images/packages/47/Kedarnath_Yatra_thumb.jpg",
    content:"the kedarnath trek",
    duration:6,
    Altitude:'12500ft',
    grade:'easy',
    Approx:'20km'
  },
  {
    img:"https://www.thecrazymountaineers.com/images/packages/47/Kedarnath_Yatra_thumb.jpg",
    content:"the carzy himalayas",
    duration:6,
    Altitude:'12500ft',
    grade:'easy',
    Approx:'20km'
  }
]
for(let i=0;i<data.length;i++){
 let cartElm=document.getElementById('cart_parent');
 let cart=document.createElement('div');
 let cart_para=document.createElement('div');
cart_para.className='cart_para';
 cart.className='top-picks';
 cart_para.style.backgroundImage=`url(${data[i].img})`;
 let content_div=document.createElement('div');
 content_div.innerText=data[i].content;
 content_div.className='on-picks'
 let duration=document.createElement('div');
 duration.innerText=data[i].duration;
 let  Altitude=document.createElement('div');
 Altitude.innerText=data[i].Altitude;
 let grade=document.createElement('div');
 grade.innerText=data[i].grade;
 let Approx=document.createElement('div')
 Approx.innerText=data[i].Approx;

cart.append(content_div);
cart.append(duration);
cart.append(Altitude);
cart.append(grade);
cart.append(Approx);
cart_para.append(cart)
 cartElm.appendChild(cart_para);
}

