function getNews(callback) {
  
  
    // we wont use the real code to get hackernews, but instead return this :
    
    callback([{"id":10219727,"title":"US Navy limits 'whale-harming' sonar in Pacific","author":"chesterfield","link":"http://www.bbc.com/news/world-us-canada-34252058"},{"id":10220291,"title":"Electability of 2016 Presidential Candidates as Implied by Betting Markets","author":"lil_tee","link":"http://toddwschneider.com/posts/electability-of-2016-presidential-candidates-as-implied-by-betting-markets/"},{"id":10219740,"title":"Playing with Pigs","author":"geographomics","link":"http://www.playingwithpigs.nl/"},{"id":10219766,"title":"SpaceX Pricing","author":"miket","link":"http://www.spacex.com/about/capabilities"},{"id":10219003,"title":"Tmux Resurrect - Persists tmux environment across system restarts","author":"andars","link":"https://github.com/tmux-plugins/tmux-resurrect"},{"id":10220621,"title":"Jack Ma: 'Harvard rejected me 10 times'","author":"jimsojim","link":"https://agenda.weforum.org/2015/09/jack-ma-harvard-rejected-me-10-times/?ut…=buffer051b7&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer"},{"id":10220851,"title":"OneSignal help apps send better notifications. Join our team in Mountain View","author":"gdeglin","link":"http://jobs.onesignal.com/apply/gpSzt4/Senior-Full-Stack-Developer"},{"id":10219420,"title":"What Did Billion Dollar Companies Look Like at the Series A?","author":"madmax108","link":"https://medium.com/@todfrancis/what-did-billion-dollar-companies-look-like-at-the-series-a-e53ea8043a85"},{"id":10219988,"title":"A Little Guide on Using Concurrent Futures for Web Developers","author":"_Codemonkeyism","link":"http://codemonkeyism.com/a-little-guide-on-using-futures-for-web-developers/"},{"id":10219409,"title":"NASA Struggles Over Deep-Space Plutonium Power","author":"known","link":"http://www.scientificamerican.com/article/within-nasa-a-plutonium-power-struggle/"}]);
  
    /*
  
    // this is the real code to get news from hackernews. 
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
    
    */
  
}