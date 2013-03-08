var NewsView = function(em,data){
    var self = this;
    self.el = "#news-view";
    self.text = "";
    self.render = function(){
        self.text = $("<li>" + data["content"] + "</li>");
        $("#content").append(self.text);
        return self;
    };
    return self;
};
