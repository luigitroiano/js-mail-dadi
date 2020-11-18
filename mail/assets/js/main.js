var emailUtente = prompt("Inserisci la tua email");

var emails = ["cicciograzianidelcervia@gmail.com", "acquadirussiachefacose@gmail.com", "info@ristorantepiccadillysanthia.it"];

var mailTrovata = false;

//verifica email valida
for (var i = 0; i < emails.length; i++) {
  var email = emails[i];

  if (email === emailUtente) {
    mailTrovata = true;
  }
}

//verifica accesso
if (mailTrovata) {
  alert("Accesso autorizzato");
  document.getElementById("esito_login").innerHTML = "welcome " + emailUtente ;

} else {
  alert("Tu non puoi passare. cit_");
  document.getElementById("esito_login").innerHTML = "You are not welcome. Go away!";
}
