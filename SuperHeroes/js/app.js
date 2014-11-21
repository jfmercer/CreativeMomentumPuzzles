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
console.log(heroes);
console.log(heroes[0].superhero);

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
console.log(heroes);
// var x = '<li><a href=\"' + heroes[0].artURL + '\"><img src=\"' + heroes[0].artURL + '\" width=\"100\" alt=\"' + heroes[0].superhero + '\"></a></li>';
// console.log(x);