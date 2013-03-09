var NewsCollectionView = function(em){
    var self = this;
    self.items = [];
    // go to detail page.
    em.on("click",function(d){
        console.log(d);
    });
    self.render = function(items){
        var d = $("#main-view").find(".content");
        items.forEach(function(item){
            var newsView = NewsView(em,item);
            newsView.render();
            d.append(newsView.render().template);
        },self);
        d.append("<li class='more'>Load More...</li>");
        // if render template method is finished , then watch event.
        em.emit("endTemplate",null);
    };

    em.on("endTemplate",function(res){
        // manage news Items.

        $(".items").off("click");
        $(".items").on("click",function(e){
            var $this = $(this);
            e.preventDefault();
            var href = $this.data("href");
            $this.addClass("selected");
            $("#main-view").animate({
                opacity: 0.0
            },500,"ease-out");
            window.location.href = href;
        },self);


        $(".more").on("click",function(e){
            console.log("clicked");
            var $this = $(this);
            $this.addClass("selectedMore");

        },self);
        // manage more button.



    });







    return self;
};