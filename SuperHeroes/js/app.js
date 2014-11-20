// load superheroes.json
// var unorderedArray = $.ajax({
//     type : 'GET',
//     dataType : 'json',
//     url: 'js/superheroes.json',
//     success : function(data) {
//        console.log(data);
//     }
// }).done(function(data){
//     return data;
// });
// var unorderedArray = JSON.parse('superheroes.json');
var unorderedArray = [];

// make deep copy of superheroes.json into var unorderedArray
$.getJSON('js/superheroes.json', function (json) {
    // console.log(json);
    unorderedArray = $.extend(true, {}, json);
    // console.log(unorderedArray);
});