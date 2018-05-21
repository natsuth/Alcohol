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
