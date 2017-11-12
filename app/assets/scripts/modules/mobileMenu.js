import $ from 'jquery';

class mobileMenu{

    constructor(){
        this.menuIcon = $('.site-header__menu-icon');
        this.menuContent= $('.site-header__menu-content')
        this.siteHeader= $('.site-header');
        this.events();
        this.self=this;
    }

    events(){
        this.menuIcon.click(this.toggleMenu.bind(this));

        

    }

    toggleMenu(){
        
        this.menuContent.toggleClass("site-header__menu-content__is-visible");
        this.siteHeader.toggleClass('site-header__is-expanded');
        this.menuIcon.toggleClass('site-header__menu-icon__closeX');
        
        console.log('kkkk');
        console.log('ok');
       
    }
}

export default mobileMenu;