import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader{
    constructor(){

        this.headerTrigger= $('.large-hero__title');
        this.headerLinks=  $('.primary-nav a')
        this.siteHeader=  $('.site-header');
        this.headerLinks= $(".primary-nav a");
        this.createHeaderWaypoint();  
        this.pageSections= $('.page-section');

        this.createPageSectionWaypoints();

        this.addSmoothScrolling();
    
    }
    addSmoothScrolling(){
        /** */
        this.headerLinks.smoothScroll();

    }

    createHeaderWaypoint(){
        var that=this;
        new Waypoint({
            element: this.headerTrigger[0],
            handler: function(direction){
                if(direction=="down"){
                    that.siteHeader.addClass('site-header__dark');

                }
                else{
                    that.siteHeader.removeClass('site-header__dark');

                }
            }
        })
    }

    createPageSectionWaypoints(){
        var that=this;
        this.pageSections.each(function(){

            var currentPageSection= this;
            new Waypoint({
                element: currentPageSection,
                handler: function(direction){

                    if(direction=="down"){
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        $('.primary-nav a').removeClass('is-current-link');
                         $(matchingHeaderLink).addClass('is-current-link');

                    }
                 
                },
                offset: "20%"
            })

            new Waypoint({
                element: currentPageSection,
                handler: function(direction){

                    if(direction=="up"){
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        $('.primary-nav a').removeClass('is-current-link');
                         $(matchingHeaderLink).addClass('is-current-link');

                    }
                 
                },
                offset: "-40%"
            })
        });
    }


}

export default StickyHeader;
