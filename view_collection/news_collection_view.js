var NewsCollectionView = function(em){
    var self = this;
    self.items = [];
    // go to detail page.
    em.on("click",function(d){
        console.log(d);
    });
    self.render = function(items){
        items.forEach(function(item){
            var newsView = NewsView(em,item);
            newsView.render();
        },self);

    };

    return self;
};