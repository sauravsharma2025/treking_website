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
    Approx:'200km'
  }
]
for(let i=0;i<data.length;i++){
  let top_picks=`   <div class="wrap-top-pick">
  <div class="img_div" style='background-image: url("${data[i].img}");'>
  <div class="text-over-img">
  <h3>Kedarkantha Peak Trek</h3>
  <p>Uttarakhand</p>
  </div>
  </div>
  <div class="top-picks-bottom">
      <div class="dur">
          <img src="https://trekthehimalayas.com/wp-content/themes/TTH-ByClaruz/assets/icons/duration.svg">
          <div class="detail-dur">
              <p>Duration</p>
              <p>6 Days</p>
          </div>
      </div>
      <div class="approx">
          <img src="https://trekthehimalayas.com/wp-content/themes/TTH-ByClaruz/assets/icons/approx.svg">
          <div class="detail-dur">
              <p>Approx</p>
              <p>6 Days</p>
          </div>
      </div>
      <div class="grade">
          <img src="https://trekthehimalayas.com/wp-content/themes/TTH-ByClaruz/assets/icons/grade.svg">
          <div class="detail-dur">
              <p>Grade</p>
              <p>6 Days</p>
          </div>
      </div>
      <div class="alt">
          <img src="https://trekthehimalayas.com/wp-content/themes/TTH-ByClaruz/assets/icons/altitude.svg">
          <div class="detail-dur">
              <p>Altitude</p>
              <p>6 Days</p>
          </div>
      </div>
      
      
  </div>
  <div class="view-detail"><input type="button" id='view_detail-btn' value="View Detail"></div>
</div>`
//  let cartElm=document.getElementById('cart_parent');
//  let cart=document.createElement('div');
//  let cart_para=document.createElement('div');
// cart_para.className='cart_para';
//  cart.className='top-picks';
//  cart_para.style.backgroundImage=`url(${data[i].img})`;
//  let content_div=document.createElement('div');
//  content_div.innerText=data[i].content;
//  content_div.className='on-picks'
 
//  let duration=document.createElement('div');
//  duration.innerText=data[i].duration;
//  let  Altitude=document.createElement('div');
//  Altitude.innerText=data[i].Altitude;
//  let grade=document.createElement('div');
//  grade.innerText=data[i].grade;
//  let Approx=document.createElement('div')
//  Approx.innerText=data[i].Approx;

// cart_para.append(content_div);
// cart.append(duration);
// cart.append(Altitude);
// cart.append(grade);
// cart.append(Approx);
// // cart_para.append(cart)
//  cart_para.appendChild(cart);
//  cartElm.append(cart_para)
let top_picks_div=document.createElement('div');
top_picks_div.innerHTML=top_picks;
document.getElementsByClassName('top-pick-container')[0].append(top_picks_div);
}

