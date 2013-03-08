
var NewsModel = function(){
    var self = {
        name: "hello",
        currentNumber: 0,
    };
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


    self.onReceived = function(){
        console.log("hello world");
        console.log(self.currentNumber);
    };







    return self;
};


var newsModel = new NewsModel();
newsModel.fetchLatest(newsModel.onReceived);
