
var NewsModel = function(){
    var self = {
        name: "hello",
        currentNumber: 0,
        items: []
    };
    var em = new EventEmitter();
    em.on("currentNumber",function(res){
        console.log(res);
        console.log("change");

    });
    self.fetchLatest = function(callback){
        $.ajax({
            type: "GET",
            url: "http://pickalize.info:3001/latest_number",
            dataType: "json",
            success:function(data){
                self.currentNumber = data["data"];
                callback();
            }
        });

    };


    // if setted currentNumber, then call fetchNews.
    self.onReceivedCurrentNumber = function(){
        return fetchNews();
    };
    self.onReceivedNews = function(data){
        console.log("data");

        console.log(data);

    };



    var fetchNews = function(){
        $.ajax({
            type: "GET",
            url: "http://pickalize.info:3001/latest/"+ self.currentNumber,
            dataType: "json",
            success:function(data){
                console.log(data);
                em.emit("currentNumber");

            }
        });
    };





    return self;
};


var newsModel = new NewsModel();
newsModel.fetchLatest(newsModel.onReceivedCurrentNumber);
