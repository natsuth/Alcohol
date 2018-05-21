anime({
  targets: 'div.text2',
  translateY: [
    { value: 5, duration: 1400},
    { value: 0, duration: 900, }
  ],
  float:'0turn',
  loop: true,
});
var countEl = document.getElementById('count');
var moins = document.getElementById('moins');
var plus = document.getElementById('plus');

moins.onclick = function() {
countEl.stepDown(1)
return d = +document.getElementById('count').value;
}

plus.onclick = function() {
countEl.stepUp(1)
return d = +document.getElementById('count').value;
}

//img select active//
function effectState (option) {
  console.log('effectState triggered');
  let effectImg = document.getElementById('effectImg');
  if (option === 1) {
    effectImg.src = 'image/p12/img1.svg'
  } else if (option === 2) {
    effectImg.src = 'image/p12/img2.svg'
  } else if (option === 3) {
    effectImg.src = 'image/p12/img3.svg'
  }
}

function effectState2 (option) {
  console.log('effectState2 triggered');
  let effectImg2 = document.getElementById('effectImg2');
  if (option === 1) {
    effectImg2.src = 'image/p13/img1.svg'
  } else if (option === 2) {
    effectImg2.src = 'image/p13/img3.svg'
  } else if (option === 3) {
    effectImg2.src = 'image/p13/img2.svg'
  }
}

function effectState3 (option) {
  console.log('effectState3 triggered');
  let effectImg3 = document.getElementById('effectImg3');
  if (option === 1) {
    effectImg3.src = 'image/p11/img1.svg'
  } else if (option === 2) {
    effectImg3.src = 'image/p11/img3.svg'
  } else if (option === 3) {
    effectImg3.src = 'image/p11/img2.svg'
  }
}
//blur//
let quantityImg = document.getElementById('quantity');

function blurImg (e) {
  console.log('blur');
  console.log(e.target.value);
  console.log('blur(' + e.target.value.toString() + ')');
  if(e.target.value > 1) {
    quantityImg.style.filter = 'blur(' + e.target.value.toString() + 'px)';
  } else {
    quantityImg.style.filter = 'none';
  }
}

// Img Show By click

/* Instructions:

1) The 'beerTrigger' function will receive 'event' parameter which was passed from onclick function.

2) Then we use the 'event' parameter to get the image source of the target which is the element that you clicked.

We can use the event parameter to get the image source of the target element by using the method below.

"event.target.src"

3) When we click on the image we also want the quantity image to be changed base on our selection. We caan change the 'quantity' imagae by using the method as shown below.

"
let targetImg = event.target.src; <-- Create a variabale which keep the location of the image
quantityImg.src = targetImg;
"
*/

//function beerTrigger (event) {
//  let targetImg = event.target.src;
//  quantityImg.src = targetImg;
//}

//function wineTrigger (event) {
//  let targetImg = event.target.src;
//  quantityImg.src = targetImg;
//}
