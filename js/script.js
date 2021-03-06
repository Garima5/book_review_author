
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var typestr=$('#type').val();
    var streetstr=$('#street').val();
    var citystr=$('#city').val();
    var address=streetstr+', '+citystr;
    
    $greeting.text('so , you want to read books of '+typestr+'?');
    var streetviewURL='http://maps.googleapis.com/maps/api/streetview?size=600x300&location='+address+'';
    $body.append('<img class="bgimg" src="' +streetviewURL+ '">');
    
var nytimesURL = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json";
nytimesURL += '?' + $.param({
  'api-key': Mykey, //Enter the correct key
  'author': typestr
});
$.getJSON(nytimesURL,function(data){
        $nytHeaderElem.text('New York Times bestsellers of '+typestr);
        //console.log(data);
        articles=data.results;
        for(var i=0;i<articles.length;i++)
        {
            var article=articles[i];
            //Appending each article as a list item
            $nytElem.append('<li class="article">'+'Title :'+article.title+'<br> description :'+article.description+'<br> author :'+article.author +'  age-group :'+article.age_group+'  publisher :'+article.publisher +'   Book Review : <a href="'+article.reviews.book_review_link+'">'+article.title+'</a>'+'</li>');

        };
    }).error(function(e){ //error handling
        $nytHeaderElem.text('New York Times Article could not be loaded');
    })
   


    return false;
};

$('#form-container1').submit(loadData);

function loadData_img() {
    //Function to load background image

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var typestr=$('#type').val();
    var streetstr=$('#street').val();
    var citystr=$('#city').val();
    var address=streetstr+', '+citystr;
    
    
    var streetviewURL='http://maps.googleapis.com/maps/api/streetview?size=600x300&location='+address+'';
    $body.append('<img class="bgimg" src="' +streetviewURL+ '">');
    
   


    return false;
};

$('#form-container').submit(loadData_img);
