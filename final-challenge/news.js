function getNews(callback) {
    var news = [];

    $.getJSON("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty", function(data) {



        var news_ids = data.slice(0,10);
        var calls = [];

        $.each(news_ids,function(index, value) {

            calls.push( 
                $.getJSON("https://hacker-news.firebaseio.com/v0/item/"+value+".json?print=pretty", function(ndata) {

                //console.log(ndata);
                news.push({"id": ndata.id, "title": ndata.title, "author": ndata.by, "link":ndata.url});

              })
             );

        })

        $.when.apply($, calls).done(function() {
          callback(news)
        });



    });
  
}