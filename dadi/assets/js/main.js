//variabili
var btnGenera = document.getElementById("btn_genera");
var btnGioca = document.getElementById("btn_gioca");
var btnAgain = document.getElementById("btn_again");

var contenitore = document.getElementById("container");
var pcNumber = Number(Math.floor(Math.random() * 6) + 1);
var userNumber = Number(Math.floor(Math.random() * 6) + 1);





btnGenera.addEventListener("click",
  function(){
    document.getElementById("your_number").innerHTML = userNumber;
    document.getElementById("display_user_numb").classList.remove("hidden");
  }
);



btnGioca.addEventListener("click",
  function(){
    document.getElementById("pc_number").innerHTML = pcNumber;
    document.getElementById("display_pc_numb").classList.remove("hidden");
    document.getElementById("display_btn_again").classList.remove("hidden");

    if (userNumber > pcNumber) {
      document.getElementById("result").innerHTML = "You Biden";
    }else{
      document.getElementById("result").innerHTML = "You Trump";
    }
  }
);

btnAgain.addEventListener("click",
  function(){

    window.location.reload();
  }

);
