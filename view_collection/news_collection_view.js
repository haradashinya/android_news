var NewsCollectionView = function(em){
    console.log(em);
    var self = this;
    self.items = [];
    em.on("add",function(d){
        console.log(d);
    });
    self.render = function(d){
        console.log("called render");
    };

    return self;
};