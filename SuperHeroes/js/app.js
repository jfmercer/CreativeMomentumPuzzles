// make deep copy of superheroes.json into var heroes
var heroes = $.getJSON('js/superheroes.json', function (json) {
    for (var i = 0; i < json["superheroes"].length; i++) {
        // console.log(json["superheroes"][i]);
        heroes[i] = json["superheroes"][i];
    }

    return heroes;
});

console.log(heroes);