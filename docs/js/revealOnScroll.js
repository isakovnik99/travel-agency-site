//Items to reveal
var itemsToReveal = $(".feature-item");

//Hide items initially
// $(itemsToReveal).addClass("hide-item");


//Get the height of the features elements
var elementHeight = $("#measureElement").height();  //This is 2034px
var windowHeight = $(window).height();
var windowWidth = $(window).width();
var bodyHeight = $("body").height();
var lhsFeatures = $("#features-lhs");
var rhsFeatures = $("#features-rhs");
var mobileWidth = 300;
var pictureDiv = $(".large-hero__picture-div");
var imageDiv = $(".large-hero__image-div");

var checkScrollHeight = function() {
  $(window).scroll(function() {
    if( $(this).scrollTop() > elementHeight) {
      // $(itemsToReveal).removeClass("hide-item");
      // $(itemsToReveal).addClass("hide-item__is-visible");
      $(lhsFeatures).animate({left: "20px"});
      $(rhsFeatures).animate({right: "10px"});

    }
  });
}

var checkWindowWidth = function() {
  if(windowWidth > 800) {
    checkScrollHeight();
    $(imageDiv).hide();
  } else {
    $(pictureDiv).show();
  }
}

checkWindowWidth();

//Check the height for the id "testimonials"
// var testimonials = $("#testimonials");
// var indivTestimonial = $(".testmonial");
// var testimonialsHeight = $(testimonials).height();
// var windowHeight = $(window).height();
// var bodyHeight = $("html").height();
// var elementHeight = bodyHeight - testimonialsHeight;
//
// var checkNegativeHeight = function() {
//   $(window).scroll(function() {
//     if( $(this).scrollTop() > elementHeight) {
//       $(indivTestimonial).fadeIn("slow");
//     } else {
//       $(indivTestimonial).hide();
//     }
//   });
// }
//
// checkNegativeHeight();

//When the up arrow is clicked, the page scrolls to the top of the window.
var upArrow = $(".arrow-up");

var scrollWindowUp = function() {
  window.scrollTo(0,0);
}

$(upArrow).click(function() {
  scrollWindowUp();
});



//Create a variable to hold the height of the backgroundImage
// var topSectionHeight = $(".nav").height();

// Create a scroll function based on the window object
// $(window).scroll(function() {
//   if( $(this).scrollTop() > topSectionHeight) {
//     $("#arrowUp").show();
//   } else {
//     $("#arrowUp").hide();
//
//   }
// });
