function myOpen() {
  $("#pop").fadeIn(700);
}

function myCancel() {
  $("#sad").fadeIn(700);
}

function myBye() {
  $("#pop").fadeOut(700);
  setTimeout(function(){
    $("#sad").fadeOut(700);
  },400);
}

function myBack(){
  $("#sad").fadeOut(700);
}

function mySubmit() {
  if($("#mail").val().length > 0){
    $(".news").fadeOut(700);
    $("#mail").fadeOut(700);
    $(".submit").fadeOut(700);
    $(".cancelpop").fadeOut(700);

    setTimeout(function(){
      $("#hiddennews").fadeIn(700);
      $("#close").fadeIn(700);
    },1000);
  }
  else{
    $("#popred").fadeIn(700);
    setTimeout(function(){
      $("#popred").fadeOut(700);
    },3000);
  }
}
