var NewsView = function(em,data){
    var self = this;
    self.template = "";

    self.render = function(){
        // inject data into main-view .content
//        var d = $("#main-view").find(".content");
        var opts = {
            content: data["content"],
            href: data["href"].replace('"','',"gim"),
            cls: "items"
        };
        self.template = _.template('<li data-href="<%= href %>"><a href="<%= href %>"><%= content %></a></li>',opts);
        return self;
    };




    $("a").bind("click",function(e){
        console.log("ff");
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
