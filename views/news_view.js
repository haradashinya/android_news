var NewsView = function(em,data){
    var self = this;
    self.text = "";
    self.render = function(){
        var d = $("#main-view").find(".content");
        self.text = $("<li>" + data["content"] + "</li>");
        d.append(self.text);
        return self;
    };
    return self;
};
