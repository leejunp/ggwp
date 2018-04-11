//first popup
var x=0;

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

function myCloseAll(){
  $("#pop").fadeOut(700);
  $("#hiddennews").fadeout(700);
  $(".popbox").fadeout(700);
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

//second popup

function myOpenTwo() {
  $("#poptwo").fadeIn(700);
}

function mySubmittwo() {
  if($("#bug").val().length > 0){
    $("#bug").fadeOut(700);
    $("#ntwo").fadeOut(700);
    $("#sutwo").fadeOut(700);
    $("#cantwo").fadeOut(700);
    setTimeout(function(){
      $("#hiddennewstwo").fadeIn(700);
      $("#closetwo").fadeIn(700);
    },1000);
  }
  else{
    $("#popredtwo").fadeIn(700);
    setTimeout(function(){
      $("#popredtwo").fadeOut(700);
    },3000);
  }
}

function myCanceltwo(){
  $("#poptwo").fadeOut(700);
}

function myCloseAlltwo(){
  $("#poptwo").fadeOut(700);
}
