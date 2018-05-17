 $("#btnCopy").on("click",function(){
    var $img = $("#firstDiv").children("img").clone();
     $("#secondDiv").append($img);
});
