function initialize(){
  // document.getElementById("quoteinput").focus();

  var typed = new Typed('#typed', {
    strings: ["#urbanism", "#civictech", "#raumplanung", "#opendata"],
    typeSpeed: 100,
    startDelay: 1000,
    backDelay: 2000,
    smartBackspace: true,
    showCursor: false,
    loop: true
  });

}

window.onload = initialize;
