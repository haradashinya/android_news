
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


    self.onReceivedCurrentNumber = function(){
        return fetchNewsFromNum();
    };



    var fetchNewsFromNum = function(){
        $.ajax({
            type: "GET",
            url: "http://pickalize.info:3001/latest/"+ self.currentNumber,
            dataType: "json",
            success:function(data){
                console.log(data);

            }
        });
    };





    return self;
};


var newsModel = new NewsModel();
newsModel.fetchLatest(newsModel.onReceivedCurrentNumber);
