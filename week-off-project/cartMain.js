$("#menu-toggle").click(function() {
      $("#wrapper").toggleClass("toggled");
    });
$("#cart").append(localStorage.getItem("product"))