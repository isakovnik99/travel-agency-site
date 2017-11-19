// var menuIcon = $(".site-header__menu-icon");
// var menuContent = $(".site-header__menu-content");
// var siteHeader = $(".site-header");
// var topIconBar = $(".site-header__menu-icon__top");
// var bottomIconBar = $("site-header__menu-icon__bottom");
//
// $(menuIcon).click(function() {
//   $(menuContent).toggleClass("site-header__menu-content--is-visible");
//   $(siteHeader).toggleClass("site-header__is-expanded");
//   $(topIconBar).toggleClass("site-header__menu-icon--close-topbar");
//   $(bottomIconBar).toggleClass("site-header__menu-icon--close-bottombar");
// });

var menuHamburger = $(".hamburger");
var menuCross = $(".cross");
var menuContent = $(".site-header__menu-content");

$(menuHamburger).click(function() {
   $(menuContent).toggleClass("site-header__menu-content--is-visible");
   $(menuHamburger).hide();
   $(menuCross).show();
});

$(menuCross).click(function() {
   $(menuContent).toggleClass("site-header__menu-content--is-visible");
   $(menuHamburger).show();
   $(menuCross).hide();
});
