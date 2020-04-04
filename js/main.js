// Creo un carousel per la visualizzazione di tot immagini a turno

$(document).ready(function(){
  // funzione di callback per quando si clicca right
  $(".right").click(
    nextimg
  );

  // funzione di callback per quando si clicca left
  $(".left").click(
    previmg
  );

  // funzione di callback per la navigazione tramite pallini
  $(".dot").click(
      dotnav
  );

  // cosa succede quando viene cliccato right

  function nextimg() {

    // onscreen serve a identificare l'immagine con classe active
    var onscreen = $(".images img.active");
    // dotscreen serve a identificare il pallino con classe active
    var dotscreen = $(".dot.doton");

    // rimuovo la classe active da onscreen
    onscreen.removeClass("active");
    // rimuovo la classe doton da dotscreen
    dotscreen.removeClass("doton");

    // se l'immagine onscreen ha la classe last, imposta first onscreen
    if (onscreen.hasClass("last")){
      $(".images img.first").addClass("active");
      // idem per pallino
      $(".dot.first").addClass("doton")
    } else {
      // imposto la classe active sull'immagine seguente
      onscreen.next().addClass("active");
      // idem per pallino
      dotscreen.next().addClass("doton");
    }
  }

  // cosa succede quando viene cliccato left

  function previmg() {

    // onscreen serve a identificare l'immagine con classe active
    var onscreen = $(".images img.active");
    // dotscreen serve a identificare il pallino con classe active
    var dotscreen = $(".dot.doton");

    // rimuovo la classe active da onscreen
    onscreen.removeClass("active");
    // rimuovo la classe doton da dotscreen
    dotscreen.removeClass("doton");

    // se l'immagine onscreen ha la classe first, imposta last onscreen
    if (onscreen.hasClass("first")){
      $(".images img.last").addClass("active");
      // idem per pallino
      $(".dot.last").addClass("doton")
    } else {
      // imposto la classe active sull'immagine seguente
      onscreen.prev().addClass("active");
      // idem per pallino
      dotscreen.prev().addClass("doton");
    }
  }

  // navigazione tramite pallini

  function dotnav(){

    // onscreen serve a identificare l'immagine con classe active
    var onscreen = $(".images img.active");
    // dotscreen serve a identificare il pallino con classe active
    var dotscreen = $(".dot.doton");

    // rimuovo la classe active da onscreen e dotscreen
    onscreen.removeClass("active");
    dotscreen.removeClass("active");

    // variabile per indicizzare i pallini
    var thechoosendot = $(".dot").index(this);
    console.log(thechoosendot);

    // indicizzo l'img in base al valore del dot nell'index
    // e gli associo la classe active
    $(".images img").eq(this).addClass("active");
    $(this).addClass("active");

  }


});
