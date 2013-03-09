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
        // if render template method is finished , then watch event.
        em.emit("endTemplate",null);
    };

    em.on("endTemplate",function(res){
        $("li").off("click");

        $("li").on("click",function(e){
            e.preventDefault();
            var href = $(this).data("href");
            $(this).addClass("selected");
            $("#main-view").animate({
                opacity: 0.0
            },500,"ease-out");
            window.location.href = href;
        },self);

    });







    return self;
};