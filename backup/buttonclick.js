    var beer = document.getElementById("beerimg");
    var wine = document.getElementById("wineimg");
    var whisky = document.getElementById("whiskyimg");
    var cocktail = document.getElementById("cocktailimg");
    var c = null;


function housein() {
    document.getElementById("hide").style.opacity = "1";
    document.getElementById("show").style.opacity = "0.5";
    return e = 0;
}

function carout() {
    document.getElementById("hide").style.opacity = "0.5";
    document.getElementById("show").style.opacity = "1";
    return e = 1;
}



function v01() {
    document.getElementById("v1").style.opacity = "1";
    document.getElementById("v2").style.opacity = "0.5";
    document.getElementById("v3").style.opacity = "0.5";
    document.getElementById("v4").style.opacity = "0.5";
    return f = 3;
  }

function v02() {
    document.getElementById("v1").style.opacity = "0.5";
    document.getElementById("v2").style.opacity = "1";
    document.getElementById("v3").style.opacity = "0.5";
    document.getElementById("v4").style.opacity = "0.5";
    return f = 2;
  }

function v03() {
    document.getElementById("v1").style.opacity = "0.5";
    document.getElementById("v2").style.opacity = "0.5";
    document.getElementById("v3").style.opacity = "1";
    document.getElementById("v4").style.opacity = "0.5";
    return f = 1;
}
function v04() {
    document.getElementById("v1").style.opacity = "0.5";
    document.getElementById("v2").style.opacity = "0.5";
    document.getElementById("v3").style.opacity = "0.5";
    document.getElementById("v4").style.opacity = "1";
    return f = 0;
}







function myFunction1() {
    console.log('triggered');
    document.getElementById("01").style.opacity = "1";
    document.getElementById("02").style.opacity = "0.5";
    document.getElementById("03").style.opacity = "0.5";
    document.getElementById("04").style.opacity = "0.5";
    beer.style.display = "block";
    wine.style.display = "none";
    whisky.style.display = "none";
    cocktail.style.display = "none";
    return c = 102.6;
}

function b1p2() {
      document.getElementById("beer1p2").style.opacity = "1";
      document.getElementById("beer2p2").style.opacity = "0.5";
      document.getElementById("beer3p2").style.opacity = "0.5";
      document.getElementById("beer4p2").style.opacity = "0.5";

      var quantityImg = document.getElementById("quantity");
      quantityImg.src="image/p9/beer/1.svg";
      return b = 0.355;
    }
function b2p2() {
      document.getElementById("beer1p2").style.opacity = "0.5";
      document.getElementById("beer2p2").style.opacity = "1";
      document.getElementById("beer3p2").style.opacity = "0.5";
      document.getElementById("beer4p2").style.opacity = "0.5";

      var quantityImg = document.getElementById("quantity");
      quantityImg.src="image/p9/beer/2.svg";
      return b = 0.532;
    }
function b3p2() {
      document.getElementById("beer1p2").style.opacity = "0.5";
      document.getElementById("beer2p2").style.opacity = "0.5";
      document.getElementById("beer3p2").style.opacity = "1";
      document.getElementById("beer4p2").style.opacity = "0.5";

      var quantityImg = document.getElementById("quantity");
      quantityImg.src="image/p9/beer/3.svg";
      return b = 0.355;
    }
function b4p2() {
      document.getElementById("beer1p2").style.opacity = "0.5";
      document.getElementById("beer2p2").style.opacity = "0.5";
      document.getElementById("beer3p2").style.opacity = "0.5";
      document.getElementById("beer4p2").style.opacity = "1";

      var quantityImg = document.getElementById("quantity");
      quantityImg.src="image/p9/beer/4.svg";
      return b = 0.355;
    }




function myFunction2() {

    document.getElementById("01").style.opacity = "0.5";
    document.getElementById("02").style.opacity = "1";
    document.getElementById("03").style.opacity = "0.5";
    document.getElementById("04").style.opacity = "0.5";


    beer.style.display = "none";
    wine.style.display = "block";
    whisky.style.display = "none";
    cocktail.style.display = "none";

    return c = 86;
}

function w1p2() {
      document.getElementById("wine1p2").style.opacity = "1";
      document.getElementById("wine2p2").style.opacity = "0.5";
      document.getElementById("wine3p2").style.opacity = "0.5";
      document.getElementById("wine4p2").style.opacity = "0.5";

      var quantityImg = document.getElementById("quantity");
      quantityImg.src="image/p9/wine/1.svg";
      return b = 0.089;
    }
function w2p2() {
      document.getElementById("wine1p2").style.opacity = "0.5";
      document.getElementById("wine2p2").style.opacity = "1";
      document.getElementById("wine3p2").style.opacity = "0.5";
      document.getElementById("wine4p2").style.opacity = "0.5";

      var quantityImg = document.getElementById("quantity");
      quantityImg.src="image/p9/wine/2.svg";
      return b = 0.296;
    }
function w3p2() {
      document.getElementById("wine1p2").style.opacity = "0.5";
      document.getElementById("wine2p2").style.opacity = "0.5";
      document.getElementById("wine3p2").style.opacity = "1";
      document.getElementById("wine4p2").style.opacity = "0.5";

      var quantityImg = document.getElementById("quantity");
      quantityImg.src="image/p9/wine/3.svg";
      return b = 0.266;
    }
function w4p2() {
      document.getElementById("wine1p2").style.opacity = "0.5";
      document.getElementById("wine2p2").style.opacity = "0.5";
      document.getElementById("wine3p2").style.opacity = "0.5";
      document.getElementById("wine4p2").style.opacity = "1";

      var quantityImg = document.getElementById("quantity");
      quantityImg.src="image/p9/wine/4.svg";
      return b = 0.591;
    }




function myFunction3() {
    document.getElementById("01").style.opacity = "0.5";
    document.getElementById("02").style.opacity = "0.5";
    document.getElementById("03").style.opacity = "1";
    document.getElementById("04").style.opacity = "0.5";


    beer.style.display = "none";
    wine.style.display = "none";
    whisky.style.display = "block";
    cocktail.style.display = "none";
    return c = 76.2;
}

function wh1p2() {
      document.getElementById("whisky1p2").style.opacity = "1";
      document.getElementById("whisky2p2").style.opacity = "0.5";
      document.getElementById("whisky3p2").style.opacity = "0.5";
      document.getElementById("whisky4p2").style.opacity = "0.5";

      var quantityImg = document.getElementById("quantity");
      quantityImg.src="image/p9/whisky/1.svg";
      return b = 0.355;
    }
function wh2p2() {
      document.getElementById("whisky1p2").style.opacity = "0.5";
      document.getElementById("whisky2p2").style.opacity = "1";
      document.getElementById("whisky3p2").style.opacity = "0.5";
      document.getElementById("whisky4p2").style.opacity = "0.5";

      var quantityImg = document.getElementById("quantity");       quantityImg.src="image/p9/whisky/2.svg";
      return b = 0.059;
      }
function wh3p2() {
        document.getElementById("whisky1p2").style.opacity = "0.5";
        document.getElementById("whisky2p2").style.opacity = "0.5";
        document.getElementById("whisky3p2").style.opacity = "1";
        document.getElementById("whisky4p2").style.opacity = "0.5";

        var quantityImg = document.getElementById("quantity");
        quantityImg.src="image/p9/whisky/3.svg";
        return b = 0.148;
      }
function wh4p2() {
        document.getElementById("whisky1p2").style.opacity = "0.5";
        document.getElementById("whisky2p2").style.opacity = "0.5";
        document.getElementById("whisky3p2").style.opacity = "0.5";
        document.getElementById("whisky4p2").style.opacity = "1";

        var quantityImg = document.getElementById("quantity");
        quantityImg.src="image/p9/whisky/4.svg";
        return b = 0.037;
      }



function myFunction4() {
    document.getElementById("01").style.opacity = "0.5";
    document.getElementById("02").style.opacity = "0.5";
    document.getElementById("03").style.opacity = "0.5";
    document.getElementById("04").style.opacity = "1";


        beer.style.display = "none";
        wine.style.display = "none";
        whisky.style.display = "none";
        cocktail.style.display = "block";
        return c = 287;
}

function c1p2() {
      document.getElementById("cocktail1p2").style.opacity = "1";
      document.getElementById("cocktail2p2").style.opacity = "0.5";
      document.getElementById("cocktail3p2").style.opacity = "0.5";
      document.getElementById("cocktail4p2").style.opacity = "0.5";

      var quantityImg = document.getElementById("quantity");
      quantityImg.src="image/p9/cocktail/1.svg";
      return b = 0.118;
    }

function c2p2() {
      document.getElementById("cocktail1p2").style.opacity = "0.5";
      document.getElementById("cocktail2p2").style.opacity = "1";
      document.getElementById("cocktail3p2").style.opacity = "0.5";
      document.getElementById("cocktail4p2").style.opacity = "0.5";

      var quantityImg = document.getElementById("quantity");
      quantityImg.src="image/p9/cocktail/2.svg";
      return b = 0.207;
}
function c3p2() {
      document.getElementById("cocktail1p2").style.opacity = "0.5";
      document.getElementById("cocktail2p2").style.opacity = "0.5";
      document.getElementById("cocktail3p2").style.opacity = "1";
      document.getElementById("cocktail4p2").style.opacity = "0.5";

      var quantityImg = document.getElementById("quantity");
      quantityImg.src="image/p9/cocktail/3.svg";
      return b = 0.207;
}
function c4p2() {
      document.getElementById("cocktail1p2").style.opacity = "0.5";
      document.getElementById("cocktail2p2").style.opacity = "0.5";
      document.getElementById("cocktail3p2").style.opacity = "0.5";
      document.getElementById("cocktail4p2").style.opacity = "1";

      var quantityImg = document.getElementById("quantity");
      quantityImg.src="image/p9/cocktail/4.svg";
      return b = 0.651;
}
