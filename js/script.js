$(document).ready(function () {
  console.log("document geladen");

  // Sectie 1: Muisover-effecten
  $("#section1").on("mouseover", function () {
    $(this).css({
      'background-color': '#a0db8e',
      'color': '#133337'
    });
  });

  $("#section1").on("mouseleave", function () {
    $(this).css({
      'background-color': '#FFF',
      'color': '#000000'
    });
  });

  // Sectie 2: Slide Up/Down
  $("#button1").click(function () {
    $("#paragraph1").slideUp(2000);
  });

  $("#button2").click(function () {
    $("#paragraph1").slideDown(2000);
  });

  // Sectie 2: Muisover-effecten
  $("#section2").on("mouseenter", function () {
    $(this).css({
      'background-color': '#e6e6fa',
      'color': '#072541'
    });
  }).on("mouseleave", function () {
    $(this).css({
      'background-color': '#FFF',
      'color': '#000000'
    });
  });

  // Sectie 2: Tonen/Verbergen
  $("#button3").click(function () {
    $("#paragraph2").hide();
  });

  $("#button4").click(function () {
    $("#paragraph2").show();
  });

  // Sectie 3: Muisover-effecten
  $("#section3").on("mouseenter", function () {
    $(this).css({
      'background-color': '#faebd7',
      'color': '#420420'
    });
  }).on("mouseleave", function () {
    $(this).css({
      'background-color': '#FFF',
      'color': '#000000'
    });
  });

  // Afbeelding Manipulatie
  $("#button5").on("click", function () {
    $('#jquery').css('width', '50%');
  });

  $("#button6").on("click", function () {
    $('#jquery').css('width', '35%');
  });

  // Paragraaf Hover-effect
  $("#paragraph4").on("mouseenter", function () {
    alert("Welkom bij Paragraaf 4! Veel leesplezier!");
  });

  // Sectie 5: Fade In/Uit
  $("#section5").on("mouseenter", function () {
    $('#paragraph5').fadeOut(2000);
  });

  $("#section5").on("mouseleave", function () {
    $('#paragraph5').fadeIn();
  });

  // Knop Hover-effecten
  $("button").hover(
    function () {
      $(this).css({
        'background-color': '#065535',
        'color': '#fff'
      });
    },
    function () {
      $(this).css({
        'background-color': '#fff',
        'color': 'green'
      });
    }
  );
});
