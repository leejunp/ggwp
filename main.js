//first popup
var x=0;

function myOpen() {
  $("#pop").fadeIn(700);
}

function myCancel() {
  $("#sad").fadeIn(100);
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
    },800);
  }
  else{
    $("#popred").fadeIn(200);
    setTimeout(function(){
      $("#popred").fadeOut(200);
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
    },800);
  }
  else{
    $("#popredtwo").fadeIn(200);
    setTimeout(function(){
      $("#popredtwo").fadeOut(200);
    },3000);
  }
}

function myCanceltwo(){
  $("#poptwo").fadeOut(700);
}

function myCloseAlltwo(){
  $("#poptwo").fadeOut(700);
}

/*search engin*/
function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });

  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
      });
}
/*figure out how to make this shit work*/
var countries = ["League of Legends","Overwatch","PUBG","Player Unknown Battlegrounds"];
autocomplete(document.getElementById("myInput"), countries);

function openWindow(e){
  event.preventDefault();
  if($("#myInput").val()=="League of Legends" || $("#myInput").val()=="league of legends"){
    /*window.location.href = "index3-1.html";*/
    var winwin= window.open("index3-1.html");
  }
  if($("#myInput").val()=="Overwatch" || $("#myInput").val()=="overwatch"){
    var winwin= window.open("index3-2.html");
  }
  if($("#myInput").val()=="PUBG" || $("#myInput").val()=="Player Unknown Battlegrounds" || $("#myInput").val()=="player unknown battlegrounds", $("#myInput").val()=="pubg"){
    var winwin= window.open("index3-3.html");
  }
  else{
    /*window.location.href="index3-4.html";*/
    var winwin= window.open("index3-4.html");
  }
}

$("#myInput").keyup(function(event) {
    if (event.keyCode === 13 && $("#myInput").val().length > 0) {
        $(".search").click();
    }
});
