$('#portfolio_carousel').carousel({
    interval: 2000 
})

// Enable Carousel Indicators
$(".carousel-item").click(function(){
    $("#portfolio_carousel").carousel(1);
  });
  
  // Enable Carousel Controls
$(".carousel-control-prev").click(function(){
$("#portfolio_carousel").carousel("prev");
});

$(".carousel-control-next").click(function(){
$("#portfolio_carousel").carousel("next");
});