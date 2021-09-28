$(function() {
    //caches a jQuery object containing the header element
    var header = $('#navbar');
    var canvarheader = $('#canvarNavbar');
    
    $(window).scroll(function() {
       var scroll = $(window).scrollTop();
       if (scroll >= header.height()) {
         header.addClass('bg-dark',1000);
       } else {
        header.removeClass("bg-dark", 1000);
      }
      if (scroll >= canvarheader.height()) {
        canvarheader.addClass('bg-dark',1000);
      } else {
        canvarheader.removeClass("bg-dark", 1000);
     }
    });
});

$("#allgemeinCardList").hide(); 

$("#welcomeTitle").delay(1000).fadeIn(3000);
$("#headerContent").delay(4000).fadeIn(2000);

$("#techToggleButton").click(function(){ 
  
  $("#allgemeinToggleButton").removeClass("btn-disabled"); 
  $("#techToggleButton").addClass("btn-disabled"); 

  $("#techCardList").fadeOut(800); 
  $("#allgemeinCardList").delay(800).fadeIn(1200);
});

$("#allgemeinToggleButton").click(function(){ 
  
  $("#techToggleButton").removeClass("btn-disabled"); 
  $("#allgemeinToggleButton").addClass("btn-disabled"); 

  $("#allgemeinCardList").fadeOut(800); 
  $("#techCardList").delay(800).fadeIn(1200);
});

function mailTo(){

  $("body").css("cursor", "progress");

  var email = "....@....";
  var name = document.getElementById("nameTextInput").value;
  var message = document.getElementById("messageTextArea").value;

  var hrefMailTo = "mailto:" + email + "?subject=" + name + "&body=" + message;

  window.location.href = hrefMailTo;

  $("body").css("cursor", "default");
}