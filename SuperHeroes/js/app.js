var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

//An image to overlay
$overlay.append($image);

//Add overlay
$("body").append($overlay);

// load JSON inner array into global var
heroes = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'js/superheroes.json',
        'dataType': "json",
        'success': function (results) {
            json = results;
        }
    });
    return json['superheroes'];
})();

heroes.sort(sortFunction);

function sortFunction(a, b) {
    if (a['superhero'] === b['superhero']) {
        return 0;
    }
    else {
        return (a['superhero'] < b['superhero']) ? -1 : 1;
    }
}

for (var i = 0; i < heroes.length; i++) {
    $("#imageGallery").append('<li><a href=\"' + heroes[i].artURL + '\"><img src=\"' + heroes[i].artURL + '\" width=\"100\" alt=\"' + heroes[i].superhero + '\"></a></li>');
}

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);

  //Show the overlay.
  $overlay.show();

  //Get child's alt attribute and set caption
  // var captionText = $(this).children("img").attr("alt");
  // $caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});