// DESCRIZIONE:
//  Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript.
// https://bitbucket.org/booleancareers/ex-hamburger-menu-base
// La soluzione Base, concerne il fatto di non toccare html e css del repo di partenza
// ma fare quello che dobbiamo seguendo quindi la logica implementata da chi ha fatto quell’intefaccia.

// $(".header-right").hide();
// $(".hamburger-menu").show();

$(".fas.fa-bars").click(function() {
  $(".hamburger-menu").show();
  });

$(".fas.fa-times").click(function() {
  $(".hamburger-menu").hide();
  });



// $(".hamburger-menu").show();




// ● $(‘selector’).addClass(‘nomeclasse’): aggiunge la classe “nomeclasse” all’elemento selezionato
// ● $(‘selector’).hide() : nasconde un elemento
// ● $(‘selector’).click() : associa ad un click una funzione


// $(‘p’).action() = tutti i <p>
// $(‘p.intro’).action() = Seleziona tutti i <p> con classe intro
// $(‘p:first).action() = Seleziona il primo elemento <p>
// $(‘[href]’).action() = Seleziona tutti gli elementi con un attributo href
