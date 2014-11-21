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
console.log(heroes);