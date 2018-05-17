var sly = document.getElementById('sly');
var cal = document.getElementById('cal');
var vre = document.getElementById('vre');
var a,b,c,d;
var e =0 ,f = 0, g = 0;

function finalre() {

a=+document.getElementById('myRange1').value;
d=+document.getElementById('count').value;
sly.innerHTML=a*b;
cal.innerHTML=Math.round(c*b*a * 100) / 100;
y =a;
  let resultImg = document.getElementById('resultimg');
  if(y == 1 || y <= 2) {
    // console.log('a');
    resultImg.src = 'image/Result/1.svg';
    result.innerHTML = 'คุณเป็นนักดื่มนาม<font color="8E0A1D">”เฮลตี้”</font><br>ดื่มพอดีและไม่ทำร้ายร่างกายมากเกินไป<br>ค่าตัว: <font color="8E0A1D">9,999,999,990</font> บาท';
  } else if (y == 3 || y <= 4) {
    // console.log('b');
    resultImg.src = 'image/Result/2.svg';
    result.innerHTML = 'คุณเป็นนักดื่มนาม<font color="8E0A1D">”สายแข็ง”</font><br>บุคคนที่ทำให้ร่างกายเสียหายขั้นรุนแรง<br>ค่าตัว: <font color="8E0A1D">9,999,999,990</font> บาท';
  } else if (y == 5 || y <= 6) {
    // console.log('c');
    resultImg.src = 'image/Result/3.svg';
   result.innerHTML = 'คุณเป็นนักดื่มนาม<font color="8E0A1D">”สายแข็ง”</font><br>บุคคนที่ทำให้ร่างกายเสียหายขั้นรุนแรง<br>ค่าตัว: <font color="8E0A1D">9,999,999,990</font> บาท';
  } else if (y == 7) {
    // console.log('b');
    resultImg.src = 'image/Result/4.svg';
    result.innerHTML = 'คุณเป็นนักดื่มนาม<font color="8E0A1D">”สายแข็ง”</font><br>บุคคนที่ทำให้ร่างกายเสียหายขั้นรุนแรง<br>ค่าตัว: <font color="8E0A1D">9,999,999,990</font> บาท';
  }


z =d+e+f+g;
  if(z == 3 || z <= 5) {
    // console.log('a');
    vre.innerHTML = 'wecwc';
  } else if (z == 6 || z <= 13) {
    // console.log('b');
    vre.innerHTML = 'csdcwe';
  } else if (z == 14 || z <= 18) {
    // console.log('c');
    vre.innerHTML = '1qwdc';
  }
}
