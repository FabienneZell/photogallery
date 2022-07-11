let imgArray = [
  'img/img1.jpg',
  'img/img2.jpg',
  'img/img3.jpg',
  'img/img4.jpg',
  'img/img5.jpg',
  'img/img6.jpg',
  'img/img7.jpg',
  'img/img8.jpg',
  'img/img9.jpg',
  'img/img10.jpg',
  'img/img11.jpg',
  'img/img12.jpg',
  'img/img13.jpg',
  'img/img14.jpg',
];


function loadImgs() {
  let content = document.getElementById('content');
  for (let i = 0; i < imgArray.length; i++) {
    content.innerHTML += `
    <div onclick="showImg(${i})" class="imgBox" >
      <img src="${imgArray[i]}" id="img" class="img">
    </div> `;
  }
}


function showImg(i) {
  let overlay = document.getElementById('overlay');
  overlay.innerHTML = `
  <div class="overlay-Img">
    <div class="overlay-close">
      <a href="#"><img src="icons/mark-white-innerblank.png" onclick="closeImg()" id="closeButton"></a>
    </div>
    <div class="overlay-img-big">
      <img id="img-big" class="imgBig">
        <div class="arrow-sort">
          <a href="#"><img src="icons/arrow-left-white-innerblank.png" onclick="previousImg(${i})" id="previousButton"class="arrow"></a>
          <a href="#"><img src="icons/arrow-right-white-innerblank.png" onclick="nextImg(${i})" id="nextButton"class="arrow"></a>
        </div>
    </div>
  </div>`;

  document.getElementById('overlay').classList.remove('d-none');
  document.getElementById('img-big').src = imgArray[i];
}


function closeImg() {
  document.getElementById('overlay').classList.add('d-none');
}


function previousImg(i) {
  i--;
  if (i >= 0) {
    showImg(i);
  } else {
    showImg(imgArray.length - 1);
  }
}


function nextImg(i) {
  i++;
  if (i == imgArray.length) {
    showImg(0);
  } else {
    showImg(i);
  }
}

