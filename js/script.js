$(document).ready(function () {
  console.log("document loaded");

  // Wanneer de muis over sectie één beweegt, veranderen de achtergrondkleur en de tekstkleur
  $("#section1").on("mouseover", function () {
    $(this).css('background-color', '#a0db8e').css('color', '#133337');
  });

  $("#section1").on("mouseleave", function () {
    $(this).css('background-color', '#FFF').css('color', '#000000');
  });

  // Wanneer er op knop 1 wordt geklikt, paragraaf 1 sildeup

  $("#button1").click(function () {
    $("#paragraph1").slideUp(2000);
  });

  // Wanneer er op knop 2 wordt geklikt, paragraaf 1 sildedown


  $("#button2").click(function () {
    $("#paragraph1").slideDown(2000);
  });

  // Wanneer de muis over sectie twee beweegt, veranderen de achtergrondkleur en de tekstkleur

  $("#section2").on("mouseover", function () {
    $('#section2').css('background-color', '#e6e6fa').css('color', '#072541');
  }).on("mouseout", function () {
    $('#section2').css('background-color', '#FFF').css('color', '#000000');
  });

  // Wanneer er op knop 3 wordt geklikt, verberg paragraaf 2
  $("#button3").click(function () {
    $('#paragraph2').hide();
  });

  // Wanneer er op knop 4 wordt geklikt, toon paragraaf 2
  $("#button4").click(function () {
    $("#paragraph2").show();
  });

  // Wanneer de muis over sectie 3 beweegt, verander de achtergrondkleur en tekstkleur
  $("#section3").on("mouseover", function () {
    $('#section3').css('background-color', '#faebd7').css('color', '#420420');
  }).on("mouseout", function () {
    $('#section3').css('background-color', '#FFF').css('color', '#000000');
  });

  // Als je op knop 5 klikt, wordt  de afbeelding half zo breed.

  $("#button5").on("click", function () {
    $('#jquery').css('width', '50%');
  });

  // Als je op knop 6 klikt, wordt de afbeelding 35% breed.
  $("#button6").on("click", function () {
    $('#jquery').css('width', '35%');
  });


  // Als de muis over paragraaf 4 gaat, verschijnt een melding: "Hallo! Dit is Paragraaf 4!"
  $("#paragraph4").hover(function () {
    alert("Welkom bij Paragraaf 4! Veel leesplezier!");
  });

  // Als je over sectie 5 gaat, vervaagt paragraaf 5 langzaam.
  $("#section5").on("mouseenter", function () {
    $('#paragraph5').fadeOut(2000);
  });

  // Als je sectie 5 verlaat, verschijnt paragraaf 5 langzaam.
  $("#section5").on("mouseleave", function () {
    $('#paragraph5').fadeIn();
  });

  // hover-effect  aan alle knoppen.
  $("button").hover(
    function () {
      $(this).css('background-color', '#065535').css('color', '#fff');
    },
    function () {
      $(this).css('background-color', '#fff').css('color', 'green');
    }
  );

});
