// introduce.html 에서 사용

$('#sentence6').click(function(){
    var In = confirm("접속하시겠습니까?");
    if(In==true){
      alert("접속");
      location.href = "https://www.instagram.com/changhoe_/";
    }
    else {
      alert("접속 취소");
    }
});


$('#sentence7').click(function(){
    var In = confirm("접속하시겠습니까?");
    if(In==true){
      alert("접속");
      location.href = "https://www.facebook.com/jeong5055";
    }
    else {
      alert("접속 취소");
    }
});
