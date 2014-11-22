var overlay = $('<div id="overlay"></div>');
var image = $("<img>");
var caption = $("<p></p>");
var heroes;

// Image to overlay
overlay.append(image);

// Caption to overlay
overlay.append(caption);

//Add overlay
$("body").append(overlay);

// load JSON inner array into global var
function getJsonFile() {
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
}

heroes = getJsonFile();

// sort heroes array
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
    $("#imageGallery").append('<li><a href=\"' + heroes[i].artURL
        + '\"><img src=\"' + heroes[i].artURL
        + '\" width=\"100\" alt=\"' + heroes[i].superhero + '\"></a></li>');
}

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  var name = '';
  var hero = [];
  var info = '';
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  image.attr("src", imageLocation);

  //Show the overlay.
  overlay.show();

  //Get child's alt attribute and set caption
  name = $(this).children("img").attr("alt");
  hero = findSuperhero(name);
  info = buildString(hero);
  caption.html(info);
});

//When overlay is clicked
overlay.click(function(){
  //Hide the overlay
  overlay.hide();
});

// find the correct superhero
function findSuperhero(name) {
    var i = 0;
    var hero;
    for (i; i < heroes.length; i++) {
        if(name === heroes[i].superhero) {
            hero = heroes[i];
            break;
        }
    }
    return hero;
}

// build the caption string
function buildString(hero) {
    var str0, str1, str2, str3, str4 = '';
    str1 = hero.superhero + "\<br\>";
    str2 = "Publisher: " + hero.publisher + "\<br\>";
    str3 = "Alter Ego: " + hero.alter_ego + "\<br\>";
    str4 = "First Appearance: " + hero.first_appearance;
    str0 = str1 + str2 + str3 + str4;

    return str0;
}