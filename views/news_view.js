var NewsView = function(em,data){
    var self = this;
    self.template = "";

    self.render = function(){
        var d = $("#main-view").find(".content");
        var opts = {
            content: data["content"],
            href: data["href"].replace('"','',"gim")
        };
        self.template = _.template('<li><a href="<%= href %>"><%= content %></a></li>',opts);
        d.append(self.template);
        return self;
    };


    $("a").bind("click",function(e){
        e.preventDefault();
        var href = $(this).attr("href");
        // implement animation.
        $("#main-view").animate({
            opacity: 0.0
        },500,"ease-out");
        window.location.href = href;

    });

    return self;
};
