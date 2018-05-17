//$(document).ready(function(){
  $("#p1").hide();
  $("#p4").hide();
  $("#p5").hide();
  $("#p6").hide();
  $("#p7").hide();
  $("#p8").hide();
  $("#p9").hide();
  $("#p10").hide();
  $("#p11").hide();
  $("#p12").hide();
  $("#p13").hide();
  $("#final").hide();
  $("#detail").hide();

  $("#beershow").click(function(){
        $("#p1").show();
    });

  $("#to4").click(function(){
        $("#p4").show();
    });

  $("#hide").click(function(){
        $("#p6").hide();
        $("#p7").hide();
        $("#noskip").hide();
        $("#skip").show();
    });
  $("#show").click(function(){
        $("#p6").show();
        $("#p7").show();
        $("#noskip").show();
        $("#skip").hide();
    });


  $("#01").click(function(){
        $("#wineimg").hide();
        $("#whiskyimg").hide();
        $("#cocktailimg").hide();
    });
  $("#01").click(function(){
        $("#beerimg").show();
    });

  $("#02").click(function(){
        $("#whiskyimg").hide();
        $("#whiskyimg").hide();
        $("#cocktailimg").hide();
    });
  $("#02").click(function(){
        $("#wineimg").show();
    });


  $("#03").click(function(){
        $("#wineimg").hide();
        $("#beerimg").hide();
        $("#cocktailimg").hide();
    });
  $("#03").click(function(){
        $("#whiskyimg").show();
    });

  $("#04").click(function(){
        $("#wineimg").hide();
        $("#beerimg").hide();
        $("#whiskyimg").hide();
    });
  $("#04").click(function(){
        $("#cocktailimg").show();
    });

});
