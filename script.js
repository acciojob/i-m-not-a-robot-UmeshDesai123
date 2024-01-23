//your JS code here. If required.
const images = ['./images/camel.jpg', './images/cheetah.jpg', './images/lion.jpg', './images/polar_bear.jpg', './images/tiger.jpg'];

for (let i = images.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let temp = images[i];
  images[i] = images[j];
  images[j] = temp;
}
images.push(images[Math.floor(Math.random() * images.length)]);
// console.log(images);

const imageContainer = document.getElementById("image-container");
const reset = document.getElementById('reset');
const verify = document.getElementById('verify');
const para = document.getElementById('para');

for (let i = 0; i < images.length; i++) {
  imageContainer.children[i].src = images[i];
}

for(let i=0; i<imageContainer.children.length; i++){
  imageContainer.children[i].addEventListener('click', imageClick);
};

let clickedImages = [];
function imageClick(event){
  if(clickedImages.length < 2){
    clickedImages.push(event.target.src);
    event.target.style.border = '5px solid blue';
    console.log(clickedImages);
  }
  if(clickedImages.length == 2){
    verify.style.display = 'inline';
  }
  return;
}

function resetAll(){
  for(let i=0; i<imageContainer.children.length; i++){
    imageContainer.children[i].style.border = '5px solid grey';
    clickedImages = [];
    verify.style.display = 'none';
  };
}

function verifyImages(){
  console.log('verify')
  if(clickedImages[0] === clickedImages[1]){
    para.innerText = 'You are a human. Congratulations!.';
  }
  else{
    para.innerText = 'We can\'t verify you as a human. You selected the non-identical tiles.'
  }
  resetAll();
}

