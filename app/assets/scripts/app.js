import mobileMenu from './modules/mobileMenu';
import $ from 'jquery';
import RevealOnScroll from './modules/revealOnScroll';
import StickyHeader from './modules/stickyHeader';


var mobilemenu= new mobileMenu();
 new RevealOnScroll($('.feature-item'), "85%");
 new RevealOnScroll($('.testimonial'), "70%");
 var stickyHeader = new StickyHeader();



